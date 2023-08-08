import React, { useState }  from 'react';

import ChildNavbar from './ChildNavbar';
import Sidebar from "./Sidebar/index";
import { theme } from '../Theme';
import styled from 'styled-components';

function Navbar() {

  const NavbarHeader = styled.div`
    width: 100%;
    background: ${theme.colors.primaryBackground};
    padding: 15px 0px;
    display: grid;
    place-items:center;
    @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
      padding: 15px 0px;
    }
  `
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NavbarHeader>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <ChildNavbar toggle={toggle} />
    </NavbarHeader>
  );
}

export default Navbar;
