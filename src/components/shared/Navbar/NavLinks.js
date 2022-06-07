import { useId } from 'react';
import { NavLink } from 'react-router-dom';
import useAppContext from '../../../context/appContext/appContext';
import links from '../../../utils/Links';

export const NavLinks = ({ user }) => {
  const { toggleMenu } = useAppContext();
  const id = useId();

  return (
    <ul>
      {links?.map(({ path, name }) => (
        <li key={`${id}-${name}`}>
          <NavLink to={path} onClick={() => toggleMenu()}>
            {name}
          </NavLink>
        </li>
      ))}

      {user && (
        <li>
          <NavLink to="/dashboard" key={`${id}-dashboard`} onClick={() => toggleMenu()}>
            Dashboard
          </NavLink>
        </li>
      )}
    </ul>
  );
};
