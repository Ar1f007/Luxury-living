import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: ${(props) => (props.pathIsHome ? '#FCF9F9' : 'transparent')};
`;
export const Nav = styled.nav`
  width: 100%;
  max-width: 1280px;
  margin-inline: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 0;

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    list-style-type: none;

    li a {
      font-size: 1rem;
      font-weight: 500;
      color: #222222;
      padding: 0.5rem 2.5rem;
      letter-spacing: 0.15%;
      border-radius: 8px;
      transition: all 0.2s;
      background: #f2ebe9;
      color: #bfbfbf;

      :hover {
        background: rgba(0, 0, 0, 0.1);
      }
    }
    a:is(:active, .active, :focus) {
      background: #f2ebe9;
      color: #251d58;
    }
  }

  .action {
    background: #251d58;
    color: #f2ebe9;
    padding: 0.5rem 2.5rem;
    border-radius: 8px;
    letter-spacing: 0.15%;
    transition: all 0.2s ease;
    font-weight: 500;

    :hover {
      background: #2a2165;
    }

    :focus {
      outline: 3px solid #2a2165;
      outline-offset: 3px;
    }
  }
`;
