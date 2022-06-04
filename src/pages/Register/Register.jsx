import { Link } from 'react-router-dom';
import { Container, FormContainer, FormRow, Title, Input, Label, Button, P } from './styles';
import { Divider, SocialLogin } from '../../components';

export const Register = () => {
  return (
    <Container>
      <FormContainer>
        <Title>Create an account</Title>

        <form>
          <FormRow>
            <Input type="text" id="firstName" required />
            <Label htmlFor="firstName">First Name</Label>
          </FormRow>

          <FormRow>
            <Input type="text" id="lastName" required />
            <Label htmlFor="lastName">Last Name</Label>
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

          <Button type="submit">Create an account</Button>
        </form>
        <P>
          Already have an account ? <Link to="/">Login</Link>
        </P>
      </FormContainer>

      <Divider>Or</Divider>
      <SocialLogin />
    </Container>
  );
};
