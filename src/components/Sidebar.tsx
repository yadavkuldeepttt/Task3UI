import React, { useState } from "react";
import styled from "styled-components";
import { FaSeedling } from "react-icons/fa"; // Importing icons from react-icons
import { CiCreditCard1 } from "react-icons/ci";
import { FaTimes } from "react-icons/fa"; // Importing the close icon

// Sidebar Container Styling
const SidebarContainer = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "20vw" : "0vw")};
  background-color: rgb(26, 30, 31);
  overflow-y: auto;
  overflow-x: hidden;
  height: 100vh;
  padding: 10px 15px;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px, rgba(0, 0, 0, 0) 0px 0px,
    rgba(94, 92, 154, 0.1) 5px 0px 25px 0px;

  &::-webkit-scrollbar {
    background: rgb(143, 148, 157);
    border-radius: 8px;
    width: 8px;
  }
  label {
    color: rgb(43, 112, 250) !important;
    text-transform: uppercase;
    font-weight: 600;
    font-size: 13px;
    letter-spacing: 0.08em;
    margin-bottom: 0.6rem;
    display: inline-block;
  }

  // Desktop and tablet view
  @media (min-width: 768px) {
    position: static;
    .icon {
      display: none;
    }
  }
  // Mobile view
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) =>
      isOpen ? "0" : "-100%"}; // Hide off-screen when closed
    z-index: 1000; // Ensure it overlays other content
    max-width: 94vw;
    height: 100vh;
    width: 100%;
    padding-top: 50px;
  }

  @media (min-width: 650px) and (max-width: 768px) {
    position: fixed;
    top: 0;
    left: ${({ isOpen }) =>
      isOpen ? "0" : "-100%"}; // Hide off-screen when closed
    z-index: 1000; // Ensure it overlays other content
    max-width: 96vw;
    height: 100vh;
    width: 100%;
    padding-top: 50px;
  }
`;

// Menu Item Styling
const MenuItem = styled.div<{ active?: boolean }>`
  padding: 0.5rem 13px;
  margin: 2px 10px;
  cursor: pointer;
  background-color: ${({ active }) =>
    active ? "rgb(45, 52, 54)" : "transparent"};
  border-radius: 8px;
  font-size: 14px;
  color: rgb(143, 148, 157);
  display: flex;
  align-items: center; // To align text and icon in a row
  gap: 8px; // Spacing between the icon and text

  &:hover {
    background-color: rgb(45, 52, 54) !important;
  }
  .icon {
    margin-right: 0.2rem;
  }
`;

const CloseIcon = styled(FaTimes)`
  font-size: 24px;
  color: #fff;
  position: absolute;
  top: 15px;
  right: 19px;
  cursor: pointer;
  z-index: 1050; // Ensure it's on top of other content
  color: rgb(143, 148, 157);

  &:hover {
    color: #fff;
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void; // Add the toggleSidebar function as a prop
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  // State to track active menu item
  const [activeItem, setActiveItem] = useState("lottery");

  return (
    <SidebarContainer isOpen={isOpen}>
      {/* Close Button for Mobile */}
      {isOpen && <CloseIcon onClick={toggleSidebar} />}

      {/* label for section */}
      <label htmlFor="">Dashboard</label>

      {/* Menu items with icons */}
      <MenuItem
        active={activeItem === "lottery"} // Check if this is the active item
        onClick={() => setActiveItem("lottery")} // Set "lottery" as active on click
      >
        <CiCreditCard1 className="icon" /> Lottery
      </MenuItem>
      <MenuItem
        active={activeItem === "farming"} // Check if this is the active item
        onClick={() => setActiveItem("farming")} // Set "farming" as active on click
      >
        <FaSeedling className="icon" /> Farming
      </MenuItem>
    </SidebarContainer>
  );
};

export default Sidebar;
