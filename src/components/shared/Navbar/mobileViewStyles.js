import styled from 'styled-components';

export const Aside = styled.aside`
  .menu-container {
    display: none;
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.3);
    padding: 2rem;
  }

  .menu-container.show {
    display: block;
  }

  .menu-links {
    background: #fcfcfc;
    border-radius: 5px;
    height: auto;
    padding: 2rem;
    position: relative;

    .close-menu-icon {
      position: absolute;
      top: 5px;
      right: 10px;
      color: #251d58;
      font-size: 1.8rem;
      font-weight: 600;
    }
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1rem;
      list-style-type: none;

      li a {
        font-size: 1rem;
        font-weight: 500;
        color: #bfbfbf;

        padding: 0.5rem 2.5rem;
        letter-spacing: 0.15%;
        border-radius: 8px;
        transition: all 0.2s;

        :hover {
          background: rgba(0, 0, 0, 0.1);
        }
      }

      a:is(:active, .active, :focus-visible) {
        background: #f2ebe9;
        color: #251d58;
      }
    }

    .action {
      font-size: 1rem;
      font-weight: 500;
      width: max-content;
      color: #f2ebe9;
      background: #251d58;

      display: block;
      margin-top: 1.5rem;
      margin-inline: auto;

      padding: 0.5rem 2.5rem;
      border-radius: 8px;
      letter-spacing: 0.15%;
      transition: all 0.2s ease;

      :hover {
        background: #2a2165;
      }

      :focus {
        outline: 3px solid #2a2165;
        outline-offset: 3px;
      }
    }
  }

  @media (min-width: 760px) {
    .menu-container .menu-links {
      max-width: 250px;
      margin-left: auto;
    }
  }

  @media (min-width: 992px) {
    .menu-container.show {
      display: none;
    }
  }
`;
