import { Route, Routes } from 'react-router-dom';
import { Navbar } from './components/shared';
import { Home } from './pages';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
