import tw from 'twin.macro';
import { Button } from '../..';

export const Form = () => {
  return (
    <Container>
      <div>
        <label className="sr-only" htmlFor="name">
          Name
        </label>
        <Input type="text" placeholder="Name" id="name" />
      </div>

      <DoubleColumn>
        <label className="sr-only" htmlFor="email">
          Email address
        </label>
        <Input type="email" placeholder="Email address" id="email" />

        <label className="sr-only" htmlFor="phone">
          Phone number
        </label>
        <Input type="tel" placeholder="Phone number" id="phone" />
      </DoubleColumn>
      <div>
        <label className="sr-only" htmlFor="message">
          Message
        </label>
        <Textarea placeholder="Message" id="message"></Textarea>
      </div>

      <Button type="submit" text="send message" />
    </Container>
  );
};

const Container = tw.form`grid grid-cols-1 gap-5 w-full max-w-2xl mx-auto py-16 lg:pb-24 px-2`;

const Input = tw.input`bg-[#F1F3F6] w-full p-4 text-sm border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#251D58]`;

const DoubleColumn = tw.div`grid grid-cols-1 md:grid-cols-2 gap-3`;

const Textarea = tw.textarea`w-full min-h-[150px] bg-[#F1F3F6] p-4 text-sm border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#251D58]`;
