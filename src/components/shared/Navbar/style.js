import tw, { styled } from 'twin.macro';
const Nav = styled.nav(({ pathIsHome = true }) => [
  tw`
  max-w-[1440px] 
  mx-auto py-5 border-2
  flex justify-between items-center
  `,
  pathIsHome ? tw`bg-red-300` : tw`bg-white`,
]);

export default Nav;
