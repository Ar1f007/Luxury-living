import { Section, Wrapper } from './styles';
import { Heading } from '../../../components';

import img1 from '../../../assets/Image/bernard-hermant-6ftZuO_-b64-unsplash 1.png';
import img2 from '../../../assets/Image/Mask Group.png';
import img3 from '../../../assets/Image/Mask Group-1.png';
import { useId } from 'react';
import { Card } from './Card';

const designs = [
  {
    img: img1,
    title: 'Villa on Washington Avenue',
    location: 'Dhaka, Bangladesh',
  },
  {
    img: img2,
    title: 'Luxury villa in Rego Park',
    location: 'Dhaka, Bangladesh',
  },
  {
    img: img3,
    title: 'Gorgeous House',
    location: 'Dhaka, Bangladesh',
  },
];

export const FeaturedDesign = () => {
  const id = useId();

  return (
    <Wrapper>
      <Heading text="projects" heading="Discover the latest Interior Design available today" />

      <Section>
        {designs.map((item, i) => (
          <Card key={`${id}-${i}`} item={item} />
        ))}
      </Section>
    </Wrapper>
  );
};
