import { Outlet, Link, useLocation } from 'react-router-dom';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';
import { useId } from 'react';
import { MobileMenuSidebar } from './MobileMenuSidebar';

import styled from 'styled-components';
import tw from 'twin.macro';
import userLinks from '../../utils/userDashboardLinks';
import adminLinks from '../../utils/adminDashboardLink';
import useUserContext from '../../context/userContext/userContext';

export const Dashboard = () => {
  const { user } = useUserContext();
  const id = useId();
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);

  const pathMatched = (route) => {
    return route === location.pathname;
  };
  return (
    <Container>
      {/* Menu bar for mobile device to show dashboard links */}
      <Bar onClick={() => setShowSidebar(!showSidebar)}>
        <HiOutlineMenuAlt1 className="w-6 h-6 text-[#251d58]" />
      </Bar>

      {showSidebar && <MobileMenuSidebar user={user} setShowSidebar={setShowSidebar} />}

      {/* Sidebar on big screen for users */}
      {user && user.role === 'user' && (
        <Sidebar>
          <Ul>
            {userLinks.map((link) => (
              <Li key={`${id}-${link.name}`}>
                <Link className={pathMatched(link.path) ? 'active' : ''} to={link.path}>
                  <i>{<link.icon className="w-5 h-5" />}</i>
                  <span>{link.name}</span>
                </Link>
              </Li>
            ))}
          </Ul>
        </Sidebar>
      )}

      {/* Sidebar on big screen for admin */}

      {user && user.role === 'admin' && (
        <Sidebar>
          <Ul>
            {adminLinks.map((link) => (
              <Li key={`${id}-${link.name}`}>
                <Link className={pathMatched(link.path) ? 'active' : ''} to={link.path}>
                  <i>{<link.icon className="w-5 h-5" />}</i>
                  <span>{link.name}</span>
                </Link>
              </Li>
            ))}
          </Ul>
        </Sidebar>
      )}

      {/* Nested content goes here */}
      <MainSection>
        <Outlet />
      </MainSection>
    </Container>
  );
};

const Container = tw.section`flex min-h-screen relative`;
const Sidebar = tw.aside`flex-basis[20rem] bg-[#fff] hidden lg:block`;
const MainSection = tw.section`flex-1 bg-[#e5e5e5] py-2 px-4`;

const Bar = tw.div`absolute right-0 pr-4 cursor-pointer lg:hidden top-2`;
const Ul = tw.ul`flex flex-col gap-y-1 px-1`;

const Li = styled.li`
  border-radius: 5px;
  overflow: hidden;
  a {
    display: flex;
    align-items: center;
    gap: 0 1rem;

    font-size: 1rem;
    font-weight: 500;
    color: #999;
    text-align: center;

    padding: 0.5rem 1.5rem;
    letter-spacing: 0.15%;

    transition: all 0.2s;

    img {
      width: 1.8rem;
    }

    :hover {
      background: rgba(0, 0, 0, 0.1);
    }
  }

  a:is(:active, .active, :focus-visible) {
    background: #251d58;
    color: #fff;
  }
`;
