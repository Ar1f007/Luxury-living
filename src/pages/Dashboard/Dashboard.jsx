import { Outlet } from 'react-router-dom';
import tw from 'twin.macro';
import { HiOutlineMenuAlt1 } from 'react-icons/hi';
import { useState } from 'react';
export const Dashboard = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  return (
    <Container>
      {showSidebar && (
        <Sidebar>
          <Bar onClick={() => setShowSidebar(!showSidebar)}>
            <HiOutlineMenuAlt1 className="w-8 h-8 text-[#251d58]" />
          </Bar>
        </Sidebar>
      )}
      <MainSection>
        <Outlet />
      </MainSection>
    </Container>
  );
};

const Container = tw.section`flex min-h-screen`;

const Sidebar = tw.aside`flex-basis[20rem] bg-[#fff] relative`;
const Bar = tw.div`absolute -right-10 pr-2 cursor-pointer`;

const MainSection = tw.section`flex-1 bg-[#e5e5e5]`;
