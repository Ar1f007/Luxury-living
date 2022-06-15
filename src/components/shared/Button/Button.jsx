import styled from 'styled-components';

export const Button = ({ type, text, variant, place }) => {
  return (
    <Wrapper type={type} variant={variant} place={place}>
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  padding: 0.8rem 4rem;
  background: #251d58;
  color: #fff;
  border-radius: 4px;
  text-transform: capitalize;
  display: inline-block;

  width: ${(props) => (props.variant === 'small' ? 'max-content' : 'auto')};
  margin-inline: ${(props) => (props.place === 'center' ? 'auto' : 'initial')};
  :hover {
    background: #302572;
  }

  :focus-visible {
    outline-color: 3px solid #fff;
    outline-offset: 3px;
  }
`;
