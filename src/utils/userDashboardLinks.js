import { RiFileListLine } from 'react-icons/ri';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { MdOutlineRateReview } from 'react-icons/md';

const links = [
  { name: 'Booking list', path: '/dashboard', icon: RiFileListLine },
  { name: 'Book', path: '/dashboard/book', icon: AiOutlineShoppingCart },
  { name: 'Review', path: '/dashboard/review', icon: MdOutlineRateReview },
];  

export default links;
