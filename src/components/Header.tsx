// components/Header.tsx
import React from "react";
import styled from "styled-components";
import logo from "../assets/Logo.png";
import { FaBars } from "react-icons/fa"; // Import the bar icon


const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 13px;
  background-color: rgb(26,30,31);
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: #ffffff;

  img {
    height: 40px;
    width: auto;
  }
`;

const LoginButton = styled.button`
  border: 0px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.03em;
  outline: none;
  box-shadow: none;
  border-radius: 40px;
  transition: background-color 0.2s;
  padding: 7px 20px;
  background-color: #2b70fa;
  color: white;
  &:hover {
    opacity: 0.65;
  }
  &:focus{
    box-shadow: none;
    outline: 0px;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MenuIcon = styled(FaBars)`
  font-size: 24px;
  color: white;
  cursor: pointer;

  /* Show only on mobile screens */
  @media (min-width: 769px) {
    display: none;
  }
`;

interface HeaderProps {
  toggleSidebar: () => void;
}


const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <HeaderContainer>
      <Logo>
        <img src={logo} alt="Logo" />
      </Logo>
      <IconContainer>
      <MenuIcon onClick={toggleSidebar} /> {/* Menu icon only visible on mobile */}
      <LoginButton>Login</LoginButton>
      </IconContainer>
    </HeaderContainer>
  );
};

export default Header;
