import { FaServicestack } from 'react-icons/fa';
import { TbUsers } from 'react-icons/tb';
import { GrFormAdd } from 'react-icons/gr';
import { ReactComponent as BookingIcon } from '../assets/icon/booking.svg';

const links = [
  {
    name: 'services',
    path: '/services',
    icon: <FaServicestack />,
  },
  { name: 'bookings', path: '/bookings', icon: <BookingIcon /> },
  { name: 'users', path: '/users', icon: <TbUsers /> },
  { name: 'Add Service', path: '/add-service', icon: <GrFormAdd /> },
];

export default links;
