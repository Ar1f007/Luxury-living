import { Route, Routes } from 'react-router-dom';
import { Navbar, MobileMenu, RequireAuth } from './components';
import { Dashboard, Home, Login, Register } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<RequireAuth />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
