import { Wrapper } from './styles';

export const Button = ({ text, type }) => {
  return <Wrapper type={type}>{text}</Wrapper>;
};
