import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/shared';
import { MobileMenu } from './components/shared/Navbar/MobileMenu';
import { Home } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <MobileMenu />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
