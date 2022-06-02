import { createContext, useContext, useReducer } from 'react';
import reducer from './reducer';

export const INITIAL_VALUE = {
  showMenu: false,
};

const AppContext = createContext(INITIAL_VALUE);

export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_VALUE);

  const toggleMenu = () => dispatch({ type: 'TOGGLE_MENU' });

  return (
    <AppContext.Provider
      value={{
        showMenu: state.showMenu,
        dispatch,
        toggleMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export default useAppContext;
