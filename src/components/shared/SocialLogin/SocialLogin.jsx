import tw from 'twin.macro';
import { BsFacebook } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';

export const SocialLogin = () => {
  return (
    <Container>
      <Div tabIndex="0">
        <BsFacebook className="w-9 h-9 text-[#3076FF]" /> <P>Continue with Facebook</P>
      </Div>
      <Div tabIndex="0">
        <FcGoogle className="w-9 h-9" /> <P>Continue with Google</P>
      </Div>
    </Container>
  );
};

const Container = tw.div`flex flex-col w-full lg:w-3/4 mx-auto gap-3`;
const Div = tw.div`rounded-3xl border border-[#C7C7C7] p-1 flex items-center cursor-pointer hover:bg-[#f6f6f6]`;
const P = tw.p`mx-auto font-medium text-[#2a2a2a]`;
