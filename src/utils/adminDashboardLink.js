import { RiFileListLine, RiAddFill } from 'react-icons/ri';
import { ImUsers } from 'react-icons/im';
import { MdOutlineManageSearch } from 'react-icons/md';

const links = [
  { name: 'Order list', path: '/dashboard', icon: RiFileListLine },
  { name: 'Add Service', path: '/dashboard/add-service', icon: RiAddFill },
  { name: 'Manage Users', path: '/dashboard/manage-users', icon: ImUsers },
  { name: 'Manage Services', path: '/dashboard/manage-services', icon: MdOutlineManageSearch },
];

export default links;
