import tw from 'twin.macro';

export const ErrorMessage = ({ text }) => {
  return (
    <Container>
      <ErrorIconContainer className="">
        <svg
          className="w-6 h-6 text-white fill-current"
          viewBox="0 0 40 40"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M20 3.36667C10.8167 3.36667 3.3667 10.8167 3.3667 20C3.3667 29.1833 10.8167 36.6333 20 36.6333C29.1834 36.6333 36.6334 29.1833 36.6334 20C36.6334 10.8167 29.1834 3.36667 20 3.36667ZM19.1334 33.3333V22.9H13.3334L21.6667 6.66667V17.1H27.25L19.1334 33.3333Z" />
        </svg>
      </ErrorIconContainer>

      <TextContainer>
        <Margin3>
          <Title>Error</Title>
          <ErrorText>{text}</ErrorText>
        </Margin3>
      </TextContainer>
    </Container>
  );
};

const Container = tw.div`flex w-full max-w-screen-sm mx-auto overflow-hidden bg-gray-100 mb-10 rounded-lg shadow-md dark:bg-gray-800`;
const ErrorIconContainer = tw.div`flex items-center justify-center w-12 bg-red-500`;

const TextContainer = tw.div`px-4 py-2 -mx-3`;
const Margin3 = tw.div`mx-3`;
const Title = tw.span`font-semibold text-red-500 dark:text-red-400`;
const ErrorText = tw.p`text-base text-gray-600 dark:text-gray-200`;
