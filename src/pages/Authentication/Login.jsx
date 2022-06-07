import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Divider, ErrorMessage, SocialLogin } from '../../components';
import {
  Container,
  FormContainer,
  FormRow,
  Title,
  Input,
  Label,
  Button,
  P,
  ErrorText,
} from './styles';
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { yupResolver } from '@hookform/resolvers/yup';
import loginSchema from '../../validation/loginSchema';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { splitFirebaseErrorMsg } from '../../utils';
import fetch from '../../config/axios';
import auth from '../../config/firebase';
import useUserContext from '../../context/userContext/userContext';
import { ImSpinner2 } from 'react-icons/im';

export const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState('');
  const { dispatch } = useUserContext();
  const navigate = useNavigate();
  const { state } = useLocation();

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
    setEmail(data.email);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch.post('/users/login', { email });
      dispatch({ type: 'USER_DATA', payload: { user: res.data.userInfo } });

      navigate(state?.path || '/');
    };

    if (user) {
      fetchData();
    }
  }, [user, dispatch, email, navigate, state]);

  return (
    <Container>
      <FormContainer>
        {!error ? (
          <Title>Welcome! Login to your account</Title>
        ) : (
          <ErrorMessage text={splitFirebaseErrorMsg(error.message)} />
        )}

        <form onSubmit={handleSubmit(onSubmit)}>
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
          {!loading ? (
            <Button type="submit">Login</Button>
          ) : (
            <Button type="button" disabled>
              <ImSpinner2 />
            </Button>
          )}
        </form>
        <P>
          Don't have an account? <Link to="/register">Create one</Link>
        </P>
      </FormContainer>

      <Divider>Or</Divider>
      <SocialLogin />
    </Container>
  );
};
