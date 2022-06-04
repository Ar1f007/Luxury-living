import { Route, Routes } from 'react-router-dom';
import { Navbar, MobileMenu, Footer } from './components';

import { Home, Register } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Register />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
