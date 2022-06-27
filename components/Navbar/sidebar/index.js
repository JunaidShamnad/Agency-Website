import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SideBtnWrap,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <a to="about" onClick={toggle}>
            About
          </a>
          <a to="services" onClick={toggle}>
            Services
          </a>
          <a to="contact-us" onClick={toggle}>
            Contact Us
          </a>
          <a to="sign-up" onClick={toggle}>
            Sign Up
          </a>
        </SidebarMenu>
        <SideBtnWrap>
          <a to="/sign-in">Sign In</a>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
