import { useAuthState } from 'react-firebase-hooks/auth';
import { Spinner } from '../../components';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import auth from '../../config/firebase';

export const RequireAuth = () => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} replace={true} />;
  }

  return <Outlet />;
};
