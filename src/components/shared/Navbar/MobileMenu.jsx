import useAppContext from '../../../context/appContext/appContext';
import { Wrapper } from './style';
import { Link, useNavigate } from 'react-router-dom';
import { RiCloseLine } from 'react-icons/ri';
import { NavLinks } from './NavLinks';
import { Aside } from './mobileViewStyles';
import { signOut } from 'firebase/auth';

import useUserContext from '../../../context/userContext/userContext';
import auth from '../../../config/firebase';

export const MobileMenu = () => {
  const { dispatch, user } = useUserContext();
  const navigate = useNavigate();
  const { showMenu, toggleMenu } = useAppContext();

  const handleLogout = async () => {
    toggleMenu();
    await signOut(auth);
    dispatch({ type: 'LOGOUT' });
    navigate('/');
  };

  return (
    <Wrapper>
      <Aside>
        <div className={`${showMenu ? 'menu-container show' : 'menu-container'}`}>
          <div className="menu-links z-50">
            <RiCloseLine className="close-menu-icon" onClick={() => toggleMenu()} />
            <NavLinks />

            {user === null ? (
              <Link to="/login" className="action" onClick={() => toggleMenu()}>
                Login
              </Link>
            ) : (
              <button className="action" onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </Aside>
    </Wrapper>
  );
};
