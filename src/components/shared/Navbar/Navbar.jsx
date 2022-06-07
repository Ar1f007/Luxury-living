import { Nav, Wrapper } from './style';
import { Link, useLocation } from 'react-router-dom';
import { MdMenuOpen } from 'react-icons/md';
import { NavLinks } from './NavLinks';
import { Logo } from './Logo';
import useAppContext from '../../../context/appContext/appContext';
import useUserContext from '../../../context/userContext/userContext';
import { Dropdown } from './Dropdown';

export const Navbar = () => {
  const { user } = useUserContext();
  const location = useLocation();
  const currentLocation = location.pathname;
  const pathIsHome = currentLocation === '/';

  const { toggleMenu } = useAppContext();

  return (
    <Wrapper pathIsHome={pathIsHome}>
      <Nav>
        <div className="nav-header">
          <Logo />

          <div className="flex items-center">
            {user && (
              <div className="dropdown">
                <Dropdown />
              </div>
            )}
            <button type="button" className="nav-toggle ml-2" onClick={toggleMenu}>
              <MdMenuOpen />
            </button>
          </div>
        </div>

        <div className="nav-links">
          <NavLinks user={user} />
        </div>

        <div className="actions">{!user ? <Link to="/login">Login</Link> : <Dropdown />}</div>
      </Nav>
    </Wrapper>
  );
};
