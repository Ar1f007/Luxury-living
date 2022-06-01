import { Nav, Wrapper } from './style';
import logo from '../../../assets/icon/Logo.svg';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Navbar = () => {
  const location = useLocation();
  const currentLocation = location.pathname;
  const pathIsHome = currentLocation === '/';

  return (
    <Wrapper pathIsHome={pathIsHome}>
      <Nav>
        <Link to="/">
          <img src={logo} alt="Logo - Luxury Living" />
        </Link>

        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about-us">About us</NavLink>
          </li>

          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
        <Link to="/login" className="action">
          Login
        </Link>
      </Nav>
    </Wrapper>
  );
};
