import { Nav, Wrapper } from './style';
import { Link, useLocation } from 'react-router-dom';
import { MdMenuOpen } from 'react-icons/md';
import { NavLinks } from './NavLinks';
import { Logo } from './Logo';
import useAppContext from '../../../context/appContext/appContext';

export const Navbar = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const pathIsHome = currentLocation === '/';
  const { toggleMenu } = useAppContext();

  return (
    <Wrapper pathIsHome={pathIsHome}>
      <Nav>
        <div className="nav-header">
          <Logo />

          <button type="button" className="nav-toggle" onClick={toggleMenu}>
            <MdMenuOpen />
          </button>
        </div>

        <div className="nav-links">
          <NavLinks />
        </div>

        <div className="actions">
          <Link to="/login">Login</Link>
        </div>
      </Nav>
    </Wrapper>
  );
};
