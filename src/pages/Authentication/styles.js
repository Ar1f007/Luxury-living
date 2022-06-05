import tw from 'twin.macro';
import styled from 'styled-components';

export const Container = tw.section`py-16 w-full max-w-screen-sm mx-auto px-4 lg:px-0`;
export const FormContainer = tw.div`border shadow-sm border-[#ababab] p-6 lg:p-10 rounded w-full grid grid-cols-1`;
export const Title = tw.h1`font-bold text-xl lg:text-2xl text-[#2a2a2a] mb-14`;
export const FormRow = tw.div`relative not-last-of-type:mb-12`;
export const ErrorText = tw.p`text-sm text-red-500 absolute -bottom-5`;

export const Label = styled.label`
  position: absolute;
  left: 0;
  font-family: inherit;

  font-size: 1rem;
  font-weight: 500;
  color: #2a2a2a;
  text-transform: capitalize;
  pointer-events: none;

  transition: all 0.3s ease;
`;
export const Input = styled.input`
  outline: none;
  border: 0;
  border-bottom: 1px solid #c5c5c5;

  font-family: inherit;
  color: #1d1919;
  width: 100%;

  :focus {
    outline: none;
  }

  :focus ~ label,
  :not(:placeholder-shown) ~ label {
    top: -25px;
    font-size: 0.9rem;
    color: #333;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem 1.5rem;
  background-color: #251d58;
  color: #fff;
  font-size: 1rem;
  font-weight: 400;
  letter-spacing: 0.5px;
  border-radius: 4px;
  margin: 2rem 0 1rem;
  transition: background-color 0.2s ease;

  :hover {
    background-color: #302572;
  }

  :focus {
    outline: 3px solid #302572;
    outline-offset: 3px;
  }

  :disabled {
    padding: 0.6rem 0;
  }
  :disabled svg {
    margin-inline: auto;
    font-size: 1.8rem;
    color: #c5c5c5;
    animation: rotate 1s linear infinite;
  }

  @keyframes rotate {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const P = styled.p`
  font-size: 0.9rem;
  text-align: center;
  color: #2a2a2a;
  a {
    color: #251d58;
    text-decoration: underline;
  }
`;
