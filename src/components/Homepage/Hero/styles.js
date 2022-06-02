import tw from 'twin.macro';

export const Wrapper = tw.header`
bg-[#FCF9F9]`;

export const Header = tw.section`
w-full max-w-[1440px] mx-auto py-10 lg:py-16 flex flex-col md:flex-row-reverse gap-5 px-4 md:px-8 lg:px-10 xl:px-0 items-center
`;

export const Section = tw.section`
w-full
`;

export const Title = tw.h1`
text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-[#1f1632] lg:w-3/4 xl:w-3/5  tracking-wide mb-4
`;

export const Paragraph = tw.p`
font-normal text-base text-[#606268] tracking-wide lg:w-3/4 mb-6
`;
