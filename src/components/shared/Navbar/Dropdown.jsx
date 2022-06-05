import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { CgProfile } from 'react-icons/cg';
import { TbLogout } from 'react-icons/tb';
import { signOut } from 'firebase/auth';
import auth from '../../../config/firebase';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../../../context/userContext/userContext';
import {
  Container,
  Div,
  DropdownBtn,
  DropdownBtnText,
  DropdownContainer,
  Hr,
  MarginInline,
  UserEmail,
  UserImg,
  UserInfoBox,
  UserName,
} from './dropdownStyles';

const defaultImage = 'https://tinyurl.com/29nkyw86';

export const Dropdown = () => {
  const { user, dispatch } = useUserContext();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Container>
      <DropdownBtn onClick={() => setShowDropdown(!showDropdown)}>
        <DropdownBtnText>{user.name.split(' ')[0] || 'Welcome'}</DropdownBtnText>
        <FiChevronDown className="w-5 h-5 mx-1" />
      </DropdownBtn>

      {showDropdown && (
        <DropdownContainer>
          <UserInfoBox>
            <UserImg src={user.image || defaultImage} alt={`${user.name.split(' ')[0]} avatar`} />

            <MarginInline>
              <UserName className="">{user.name}</UserName>
              <UserEmail>{user.email || 'email: n/a'}</UserEmail>
            </MarginInline>
          </UserInfoBox>

          <Hr />

          <Div tabIndex="0" onClick={() => setShowDropdown(!showDropdown)}>
            <CgProfile className="w-5 h-5 mx-1" />
            <MarginInline>view profile</MarginInline>
          </Div>

          <Div
            tabIndex="0"
            onClick={() => {
              setShowDropdown(!showDropdown);
              dispatch({ type: 'LOGOUT' });
              signOut(auth);
              navigate('/');
            }}
          >
            <TbLogout className="w-5 h-5 mx-1" />
            <MarginInline>Logout</MarginInline>
          </Div>
        </DropdownContainer>
      )}
    </Container>
  );
};
