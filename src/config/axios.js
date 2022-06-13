import axios from 'axios';
import { signOut } from 'firebase/auth';
import alert from '../utils/alert';
import auth from './firebase';

const url = 'http://localhost:5000/api/v1';

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    const {
      status,
      data: { message },
    } = error.response;

    switch (status) {
      case 400:
        alert('warning', message || 'Not found');
        break;

      case 401 || 403:
        signOut(auth);
        window.location.href = '/login';
        alert('error', message || 'Login to continue');
        break;

      case 404:
        alert('error', message || 'Not found');
        break;

      default:
        Promise.reject(error);
    }
  }
);
export default instance;
