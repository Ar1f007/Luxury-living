import styled from 'styled-components';
import userLinks from '../../utils/userDashboardLinks';
import adminLinks from '../../utils/adminDashboardLink';

import { Link, useLocation } from 'react-router-dom';
import { useId } from 'react';
import { RiCloseLine } from 'react-icons/ri';

export const MobileMenuSidebar = ({ user, setShowSidebar }) => {
  const id = useId();
  const location = useLocation();

  const pathMatched = (route) => {
    return route === location.pathname;
  };

  const handleClick = () => setShowSidebar(false);
  return (
    <Container>
      {/* Creates dark background overlay */}
      <Overlay>
        {/* Inside overlay - showing navigation links  */}
        <ul>
          {/*  X - icon for closing menu */}
          <RiCloseLine className="w-6 h-6 absolute right-2 top-1" onClick={() => handleClick()} />

          {/* Dashboard Menu links for user */}
          {user &&
            user.role === 'user' &&
            userLinks.map((link) => (
              <li key={`${id}-${link.name}`} onClick={() => handleClick()}>
                <Link to={link.path} className={pathMatched(link.path) ? 'active' : ''}>
                  <i>{<link.icon className="w-5 h-5" />}</i>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}

          {user &&
            user.role === 'admin' &&
            adminLinks.map((link) => (
              <li key={`${id}-${link.name}`} onClick={() => handleClick()}>
                <Link to={link.path} className={pathMatched(link.path) ? 'active' : ''}>
                  <i>{<link.icon className="w-5 h-5" />}</i>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
        </ul>
      </Overlay>
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  transition: all 0.3s ease;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: all 0.3s ease;

  ul {
    width: max-content;
    padding: 2rem 4rem;
    background: #fff;
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    border-radius: 5px;
    margin-inline: auto;
    margin-top: 3rem;

    li {
      text-align: center;

      a {
        display: flex;
        align-items: center;
        gap: 0 0.8rem;
        padding: 0.5rem 2rem;
        border-radius: 5px;
      }

      a.active {
        background: #251d58;
        color: #fff;
      }
    }
  }
`;
