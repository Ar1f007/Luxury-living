import heroImg from '../../../assets/Image/pierre-chatel-innocenti-AlSlE8IAjZo-unsplash 1.png';

import { Header, Paragraph, Section, Title, Wrapper } from './styles';

import { Button } from '../../../components';

export const Hero = () => {
  return (
    <Wrapper>
      <Header>
        <Section>
          <img
            src={heroImg}
            alt=""
            className="w-full max-w-xl rounded
        "
          />
        </Section>

        <Section>
          <div>
            <Title>We Build Your Dream</Title>
            <Paragraph>
              Online Easte Agency, the mordern way to sell your own home, You can use Griffin
              Residential to market your property
            </Paragraph>

            <Button text="Booking" type="button" />
          </div>
        </Section>
      </Header>
    </Wrapper>
  );
};
