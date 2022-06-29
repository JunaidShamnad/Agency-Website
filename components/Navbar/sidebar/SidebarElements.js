import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #000000;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
 
`;

export const SidebarWrapper = styled.div`
  color: #fff;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
/*
export const SidebarLink = styled(LinkR)`
 If you need smooth scroll change (LinkR) to (LinkS) */
  /* display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #0655d8;
    transition: 0.2s ease-in-out;  

 }
`;
*/
export const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;
/*
export const SidebarRoute = styled(LinkR)`
   border-radius: 50px;
  background: rgb(37,108,225);
 background: linear-gradient(117deg, rgba(37,108,225,1) 0%, rgba(22,98,224,1) 20%, rgba(8,83,204,1) 41%, rgba(2,76,195,1) 59%, rgba(12,79,189,1) 85%);
  white-space: nowrap;
  padding: 16px 64px;
  color: #000;
  font-size: 19px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #010606;
  }
`;
 */