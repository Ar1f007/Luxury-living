import { Link } from 'react-router-dom';
import { Container, FormContainer, FormRow, Title, Input, Label, P, Button } from './styles';
import { Divider, SocialLogin } from '../../components';

export const Register = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Create an account</Title>

        <form>
          <FormRow>
            <Input type="text" id="name" required />
            <Label htmlFor="name">Full Name</Label>
          </FormRow>

          <FormRow>
            <Input type="email" id="email" required />
            <Label htmlFor="email">Email Address</Label>
          </FormRow>

          <FormRow>
            <Input type="password" id="password" required />
            <Label htmlFor="password">Password</Label>
          </FormRow>

          <FormRow>
            <Input type="password" id="confirmPassword" required />
            <Label htmlFor="confirmPassword">Confirm Password</Label>
          </FormRow>

          <Button type="submit">Create Account</Button>
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
