import { Route, Routes } from 'react-router-dom';
import { Navbar, MobileMenu, Footer } from './components';

import { Home } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
