import tw from 'twin.macro';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { alert, splitFirebaseErrorMsg } from '../../../utils';
import { useEffect } from 'react';

import auth from '../../../config/firebase';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useUserContext from '../../../context/userContext/userContext';

const googleIcon = <FcGoogle className="w-9 h-9" />;
const facebookIcon = <BsFacebook className="w-9 h-9 text-[#3076FF]" />;

export const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const { dispatch } = useUserContext();

  if (error) {
    const msg = splitFirebaseErrorMsg(error.message);
    if (!msg.includes('popup closed')) {
      alert('error', msg);
    }
  }

  useEffect(() => {
    const fnc = async () => {
      try {
        if (user !== undefined) {
          const res = await axios.put('http://localhost:5000/api/v1/users', {
            email: user?.user?.email,
            name: user?.user?.displayName,
            image: user?.user?.photoURL,
          });

          if (res.data.userInfo) {
            console.log(res.data.userInfo);
            dispatch({
              type: 'USER_DATA',
              payload: {
                user: res.data.userInfo,
              },
            });
            navigate('/');
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fnc();
  }, [user, navigate, dispatch]);

  return (
    <Container>
      <Div tabIndex="0">
        {facebookIcon} <P>Continue with Facebook</P>
      </Div>

      <Div tabIndex="0" onClick={() => signInWithGoogle()} disabled={loading}>
        {googleIcon} <P>{loading ? 'Signing in...' : 'Continue with Google'}</P>
      </Div>
    </Container>
  );
};

const Container = tw.div`flex flex-col w-full lg:w-3/4 mx-auto gap-3`;
const Div = tw.div`rounded-3xl border border-[#C7C7C7] px-1.5 py-1 flex items-center cursor-pointer hover:bg-[#f6f6f6]`;
const P = tw.p`mx-auto font-medium text-[#2a2a2a]`;
