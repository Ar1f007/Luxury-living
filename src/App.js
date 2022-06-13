import { Route, Routes } from 'react-router-dom';
import { Navbar, MobileMenu, RequireAuth } from './components';
import { Dashboard, Home, Login, Register, BookingList, Book, Review } from './pages';

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
          <Route path="/dashboard" element={<Dashboard />}>
            <Route index element={<BookingList />} />
            <Route path="book" element={<Book />} />
            <Route path="review" element={<Review />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
