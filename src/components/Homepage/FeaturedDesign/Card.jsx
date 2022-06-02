import tw from 'twin.macro';
import { MdLocationPin } from 'react-icons/md';

export const Card = ({ item }) => {
  const { title, img, location } = item;
  return (
    <Figure>
      <img src={img} alt={title} className="w-full  h-96 object-cover" />
      <Title>{title}</Title>
      <Div>
        <MdLocationPin />
        <P> {location}</P>
      </Div>
    </Figure>
  );
};

const Figure = tw.figure`
rounded-tl-lg rounded-tr-lg overflow-hidden text-center
`;

const Title = tw.h3`
text-xl font-semibold text-[#1F1632] mt-6 mb-2
`;

const Div = tw.div`flex items-center gap-2 justify-center text-xl text-[#1F1632]`;
const P = tw.p`text-base text-[#4D4F55]`;
