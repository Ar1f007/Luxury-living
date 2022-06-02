import tw from 'twin.macro';

export const Card = ({ service }) => {
  const { img, title, price, desc } = service;

  return (
    <Figure>
      <img src={img} alt="icon" className="w-20 h-20 mx-auto" />
      <H3>{title}</H3>
      <H4>${price}</H4>
      <P>{desc}</P>
    </Figure>
  );
};

const Figure = tw.figure`
py-10 px-6 text-center flex flex-col gap-3 border rounded-lg hover:shadow-lg
`;

const H3 = tw.h3`
text-xl font-semibold text-[#16322E] capitalize
`;

const H4 = tw.p`text-xl font-semibold text-[#251D58] block -mt-2`;
const P = tw.p`text-base font-light text-[#606268]`;
