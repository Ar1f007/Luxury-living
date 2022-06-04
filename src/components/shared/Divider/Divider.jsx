import tw from 'twin.macro';

export const Divider = ({ children }) => {
  return (
    <Div>
      <Line />
      {children}
      <Line />
    </Div>
  );
};

const Div = tw.div`my-5 flex items-center justify-between gap-2 w-3/4 mx-auto`;
const Line = tw.div`w-1/2 h-[1px] bg-[#aaa]`;
