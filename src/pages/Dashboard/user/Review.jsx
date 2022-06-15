import tw from 'twin.macro';
import { Button } from '../../../components';
// import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
export const Review = () => {
  return (
    <Container>
      {/* Name of the reviewer */}
      <div>
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <Input type="text" placeholder="Your name" id="name" />
      </div>

      {/* Company's name / designation */}
      <div>
        <label htmlFor="companyNameAndDesignation" className="sr-only">
          Company's name , designation
        </label>
        <Input
          type="text"
          placeholder="Company's name, designation i.e : 'CEO of X company'"
          id="companyNameAndDesignation"
        />
      </div>

      {/* Testimonial */}
      <div>
        <label htmlFor="testimonialDescription" className="sr-only">
          Description
        </label>
        <Textarea placeholder="Your review description" id="testimonialDescription" />
      </div>

      {/* Submit button */}
      <Button type="button" variant="small" text="submit" />
    </Container>
  );
};

const Container = tw.form`grid grid-cols-1 gap-5 w-full max-w-xl py-12 lg:pl-8`;
const Input = tw.input`bg-[#F1F3F6] w-full p-4 text-sm border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#251D58]`;
const Textarea = tw.textarea`w-full min-h-[100px] bg-[#F1F3F6] p-4 text-sm border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#251D58]`;
