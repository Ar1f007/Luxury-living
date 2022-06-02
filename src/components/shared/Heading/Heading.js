import tw from 'twin.macro';

export const Heading = ({ text, heading }) => {
  return (
    <Header>
      <P>{text}</P>
      <H2>{heading}</H2>
    </Header>
  );
};

const Header = tw.header`
text-center mb-5 max-w-[580px] mx-auto
`;
const P = tw.p`text-sm text-[#251D58] capitalize`;
const H2 = tw.h2`
text-2xl md:text-3xl xl:text-4xl font-bold text-[#1F1632]`;
