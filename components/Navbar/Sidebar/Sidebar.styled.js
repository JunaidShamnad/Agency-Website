import styled from "styled-components";
import { motion } from "framer-motion";
import { MdOutlineClose } from "react-icons/md";
import Link from "next/link";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  background: #fff;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const IconContainer = styled(motion.div)`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const CloseIcon = styled(MdOutlineClose)`
color:#000;
font-size:25px;
font-weight:600;
`;
export const SidebarMenuWrapper = styled(motion.div)`
 display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(5, 60px);
  }
`;
export const SidebarMenu = styled(motion.ul)`
  
  
`;
export const SidebarMenuLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
margin:0.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #000;
  cursor: pointer;

  &:hover {
    color: #000000;
    transition: 0.2s ease-in-out;
  }`;
export const SidebarMenuLinkA = styled(motion.a)`
 color:#0d0a19;
 opacity:0.8;
 font-size: 1.8rem;
 text-decoration: underline;
  font-weight:600;
  letter-spacing:0.8;
  line-height:180%;
  transition: all 2s ease-in-out;

  &:hover {
    opacity:1;
    transition:all  2s ease-in-out;
    font-style: italic;
  }
`;
