import { Link } from 'react-router-dom';
import { Divider, SocialLogin } from '../../components';
import { Container, FormContainer, FormRow, Title, Input, Label, Button, P } from './styles';

export const Login = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Welcome! Login to your account</Title>

        <form>
          <FormRow>
            <Input type="email" id="email" required />
            <Label htmlFor="email">Email Address</Label>
          </FormRow>

          <FormRow>
            <Input type="password" id="password" required />
            <Label htmlFor="password">Password</Label>
          </FormRow>

          <Button type="submit">Login</Button>
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
