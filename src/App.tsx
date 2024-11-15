// App.tsx
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import Lottery from "./components/Lottery";
import Header from "./components/Header";
import { theme } from "./theme";

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: rgb(45, 52, 54);
  color: #ffffff;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex: 1;
  overflow: hidden;
`;

const SidebarWrapper = styled.div`
  overflow: hidden;
  transition: max-width 0.3s ease;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: rgb(45, 52, 54);
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 5rem;
  box-shadow: rgb(47, 55, 71) 0px 0px 5px inset;
  &::-webkit-scrollbar {
    background: rgb(143, 148, 157);
    border-radius: 8px;
    width: 8px;
  }
`;

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  // Effect hook to handle screen size changes
  useEffect(() => {
    const handleResize = () => {
      // Automatically open sidebar for large screens (desktop and above)
      if (window.innerWidth >= 768) {
        setIsSidebarOpen(true);
      } else {
        // Close sidebar for mobile and smaller screens
        setIsSidebarOpen(false);
      }
    };

    // Call the handleResize function on initial load and whenever the window is resized
    handleResize();

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run only once after mount

  return (
    <ThemeProvider theme={theme}>
      <AppContainer>
        <Header toggleSidebar={toggleSidebar} />
        <ContentWrapper>
          <SidebarWrapper>
            <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
          </SidebarWrapper>
          <MainContent>
            <Lottery />
          </MainContent>
        </ContentWrapper>
      </AppContainer>
    </ThemeProvider>
  );
};

export default App;
