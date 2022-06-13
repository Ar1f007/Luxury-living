import { Link, useNavigate } from 'react-router-dom';
import {
  Container,
  FormContainer,
  FormRow,
  Title,
  Input,
  Label,
  P,
  Button,
  ErrorText,
} from './styles';
import { Divider, ErrorMessage, SocialLogin } from '../../components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import registerSchema from '../../validation/registerSchema';
import { useEffect, useState } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../config/firebase';
import { alert, splitFirebaseErrorMsg } from '../../utils';
import { ImSpinner2 } from 'react-icons/im';
import axios from '../../config/axios';
import useUserContext from '../../context/userContext/userContext';

export const Register = () => {
  const { dispatch } = useUserContext();
  const [userCredentials, setUserCredentials] = useState('');
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(
    auth,
    { sendEmailVerification: true }
  );
  const [updateProfile] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    const sendData = async () => {
      if (user && userCredentials) {
        console.log(userCredentials);
        const res = await axios.put('/users', { ...userCredentials });

        if (res.data.userInfo) {
          dispatch({
            type: 'USER_DATA',
            payload: {
              user: res.data.userInfo,
            },
          });
          alert('success', 'Account created');
          navigate('/');
        }
      }
    };
    sendData();
  }, [user, navigate, userCredentials, dispatch]);

  const onSubmit = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    setUserCredentials({
      name: data.name,
      email: data.email,
      image: null,
    });
  };

  return (
    <Container>
      <FormContainer>
        {!error ? (
          <Title>Create an account</Title>
        ) : (
          <ErrorMessage text={splitFirebaseErrorMsg(error.message)} />
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormRow>
            <Input type="text" id="name" placeholder=" " autoComplete="off" {...register('name')} />
            <Label htmlFor="name">Full Name</Label>

            <ErrorText>{errors?.name?.message}</ErrorText>
          </FormRow>

          <FormRow>
            <Input
              type="email"
              id="email"
              placeholder=" "
              autoComplete="off"
              {...register('email')}
            />
            <Label htmlFor="email">Email Address</Label>
            <ErrorText>{errors?.email?.message}</ErrorText>
          </FormRow>

          <FormRow>
            <Input
              type="password"
              id="password"
              placeholder=" "
              autoComplete="off"
              {...register('password')}
            />
            <Label htmlFor="password">Password</Label>
            <ErrorText>{errors?.password?.message}</ErrorText>
          </FormRow>

          <FormRow>
            <Input
              type="password"
              id="confirmPassword"
              placeholder=" "
              autoComplete="off"
              {...register('confirmPassword')}
            />
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <ErrorText>{errors?.confirmPassword?.message}</ErrorText>
          </FormRow>

          {loading ? (
            <Button type="button" disabled>
              <ImSpinner2 />
            </Button>
          ) : (
            <Button type="submit">Create Account</Button>
          )}
        </form>
        <P>
          Already have an account? <Link to="/login">Login</Link>
        </P>
      </FormContainer>

      <Divider>Or</Divider>
      <SocialLogin />
    </Container>
  );
};
