import styled from 'styled-components';

export const Wrapper = styled.header`
  background-color: ${(props) => (props.pathIsHome ? '#FCF9F9' : 'transparent')};
`;

// Large device menu styles
export const Nav = styled.nav`
  width: 90vw;
  max-width: 1440px;
  margin-inline: auto;
  padding: 1rem 0;

  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .logo {
      width: 80px;
      margin-left: -5px;
    }
  }

  .nav-toggle {
    background: transparent;
    border: transparent;
    color: #251d58;

    svg {
      font-size: 1.8rem;
    }
  }

  .nav-links ul,
  .actions {
    display: none;
  }

  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }

    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;

    .nav-links ul {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .nav-header a,
    .nav-header a:focus-visible {
      background: transparent;
    }
    .nav-header .logo {
      width: 100px;
    }

    a {
      font-size: 1rem;
      font-weight: 500;
      color: #bfbfbf;
      background: #f2ebe9;

      padding: 0.5rem 2.5rem;
      letter-spacing: 0.15%;
      border-radius: 8px;
      transition: all 0.2s;

      :hover {
        background: rgba(0, 0, 0, 0.1);
        color: #999;
      }
    }

    a:is(:active, .active, :focus-visible) {
      background: #f2ebe9;
      color: #251d58;
      outline: 2px solid #251d58;
    }

    .actions {
      display: grid;
    }

    .actions a {
      background-color: #251d58;
      color: #f2ebe9;

      :hover {
        background: #2a2165;
      }

      :focus-visible {
        outline: 3px solid #2a2165;
        outline-offset: 3px;
      }
    }
  }
`;
