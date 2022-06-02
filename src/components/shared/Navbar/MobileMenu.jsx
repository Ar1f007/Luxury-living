import useAppContext from '../../../context/appContext/appContext';
import { Wrapper } from './style';
import { Link } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { NavLinks } from './NavLinks';
import { Aside } from './mobileViewStyles';

export const MobileMenu = () => {
  const { showMenu, toggleMenu } = useAppContext();

  return (
    <Wrapper>
      <Aside>
        <div className={`${showMenu ? 'menu-container show' : 'menu-container'}`}>
          <div className="menu-links">
            <RiCloseLine className="close-menu-icon" onClick={() => toggleMenu()} />
            <NavLinks />

            <Link to="/login" className="action" onClick={() => toggleMenu()}>
              Login
            </Link>
          </div>
        </div>
      </Aside>
    </Wrapper>
  );
};
