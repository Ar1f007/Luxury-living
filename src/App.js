import { Route, Routes } from 'react-router-dom';
import { Navbar, MobileMenu, RequireAuth } from './components';
import useUserContext from './context/userContext/userContext';
import { Dashboard, Home, Login, Register } from './pages';
import {
  BookingList,
  Book,
  Review,
  OrderList,
  AddService,
  ManageUsers,
  ManageServices,
} from './pages/Dashboard';

function App() {
  const { user } = useUserContext();
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
            <Route index element={user?.role === 'user' ? <BookingList /> : <OrderList />} />
            <Route path="book" element={<Book />} />
            <Route path="review" element={<Review />} />

            <Route path="add-service" element={<AddService />} />
            <Route path="manage-users" element={<ManageUsers />} />
            <Route path="manage-services" element={<ManageServices />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
