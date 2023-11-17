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
  background: #fff2f2;
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;
export const IconContainer = styled(motion.div)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;
export const LogoContainer = styled(motion.div)`
  position: absolute;
  top: 1.5rem;
  left: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const LogoText = styled.h1`
 font-size:25px;
 font-weight:600;
 /* color:#5928e5; */
`

export const CloseIcon = styled(MdOutlineClose)`
color:#0D0A19;
font-size:28px;
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
  color: #0D0A19;
  cursor: pointer;

  &:hover {
    color: #000000;
    transition: 0.2s ease-in-out;
  }`;
export const SidebarMenuLinkA = styled(motion.a)`
 color:#0D0A19;;
 opacity:0.95;
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
