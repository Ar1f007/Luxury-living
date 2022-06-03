import tw from 'twin.macro';
import { MdLocationPin } from 'react-icons/md';
import { AiFillFacebook, AiFillInstagram, AiFillYoutube, AiFillLinkedin } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        {/* 1st column */}
        <Location>
          <MdLocationPin className="shrink-0 text-xl text-white" />
          <P>H#000 (0th Floor), Road #00, New DOHS, Mohakhali, Dhaka, Bangladesh</P>
        </Location>

        {/* 2nd column */}
        <div className="grid lg:justify-items-center grid-cols-2 my-5 md:my-0  lg:grid-cols-2 lg:gap-x-10">
          <div>
            <ColumnTitle>Company</ColumnTitle>
            <Ul>
              <Li>About</Li>
              <Li>Project</Li>
              <Li>Our Team</Li>
              <Li>Terms Condition</Li>
            </Ul>
          </div>
          <div>
            <ColumnTitle>Quick Links</ColumnTitle>
            <Ul>
              <Li>Rentals</Li>
              <Li>Sales</Li>
              <Li>Contact</Li>
              <Li>Our Blog</Li>
            </Ul>
          </div>
        </div>

        {/* 3rd column */}
        <div>
          <ColumnTitle>About Us</ColumnTitle>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis
            laoreet maecenas. Feugiat
          </Text>

          <Socials>
            <Link to="/">
              <AiFillFacebook />
            </Link>
            <Link to="/">
              <AiFillInstagram />
            </Link>
            <Link to="/">
              <AiFillYoutube />
            </Link>
            <Link to="/">
              <AiFillLinkedin />
            </Link>
          </Socials>
        </div>
      </Container>
      <p className="text-sm text-center text-gray-300 mt-8">Copyright &copy; Luxury Living</p>
    </Wrapper>
  );
};

const Wrapper = tw.footer`bg-[#251D58] px-6 py-12 lg:p-8 text-gray-100 relative`;

const Container = tw.section`w-full max-w-[1440px] mx-auto grid lg:justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3`;
const ColumnTitle = tw.p`text-xl tracking-wide mb-4`;

const Location = tw.div`flex items-start gap-1`;
const P = tw.p`text-sm`;

const Ul = tw.ul`flex flex-col gap-y-2`;
const Li = tw.li`text-sm font-light hover:underline cursor-pointer`;

const Text = tw.p`text-sm font-light`;
const Socials = tw.div`flex gap-3 flex-wrap text-2xl mt-4`;
