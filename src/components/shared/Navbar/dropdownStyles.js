import tw from 'twin.macro';

export const Container = tw.div`relative inline-block`;
export const DropdownBtn = tw.button`relative z-10 flex items-center p-2 text-sm text-[#251d58] bg-[#f2ebe9] border focus:border-[#251d58] focus:ring-opacity-0 dark:focus:ring-opacity-40 focus:ring-[#251d58] dark:focus:ring-blue-400 focus:ring rounded-md dark:text-white dark:bg-gray-800 focus:outline-none`;
export const DropdownBtnText = tw.span`mx-1 font-medium`;

export const DropdownContainer = tw.div`absolute right-0 z-20 w-max py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800 cursor-pointer`;
export const UserInfoBox = tw.div`flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white`;
export const UserImg = tw.img`flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9`;
export const MarginInline = tw.div`mx-1`;
export const UserName = tw.h2`text-sm font-semibold text-gray-700 dark:text-gray-200`;
export const UserEmail = tw.p`text-sm text-gray-500 dark:text-gray-400`;

export const Hr = tw.hr`border-gray-200 dark:border-gray-700 `;

export const Div = tw.div`flex items-center p-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white
            focus:border-[#251d58] focus:ring-opacity-0 dark:focus:ring-opacity-40 focus:ring-[#251d58] dark:focus:ring-blue-400 focus:ring`;
