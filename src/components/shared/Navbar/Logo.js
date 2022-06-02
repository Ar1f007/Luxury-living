import { Link } from 'react-router-dom';
import logo from '../../../assets/icon/Logo.svg';

export const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Logo - Luxury Living" className="logo" />
    </Link>
  );
};
