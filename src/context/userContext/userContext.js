import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from './reducer';

const INITIAL_VALUE = {
  user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
};

const UserContext = createContext(INITIAL_VALUE);

export const UserContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(state.user));
  }, [state.user]);

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        dispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

export default useUserContext;
