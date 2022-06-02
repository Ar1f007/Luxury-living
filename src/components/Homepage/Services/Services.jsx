import { Wrapper, Section } from '../FeaturedDesign/styles';
import { Heading } from '../../../components';
import { useId } from 'react';
import apartment from '../../../assets/icon/apartment.png';
import affordable from '../../../assets/icon/affordable.png';
import lessee from '../../../assets/icon/lessee.png';
import { Card } from './Card';
import { Button } from '../../../components';

const services = [
  {
    img: apartment,
    title: 'Office interior design',
    price: 299,
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    img: affordable,
    title: 'showroom design',
    price: 399,
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
  {
    img: lessee,
    title: 'Residential/ Home',
    price: 499,
    desc: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.',
  },
];

export const Services = () => {
  const id = useId();

  return (
    <Wrapper>
      <Heading
        text="services"
        heading="We're an agency tailored to all client's needs that always delivers"
      />

      <Section>
        {services.map((service, i) => (
          <Card key={`${id}-${i}`} service={service} />
        ))}
      </Section>

      <div className="flex justify-center mt-10">
        <Button type="button" text="Explore More" />
      </div>
    </Wrapper>
  );
};
