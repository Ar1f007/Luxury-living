import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AppContextProvider } from './context/appContext/appContext';
import { UserContextProvider } from './context/userContext/userContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
