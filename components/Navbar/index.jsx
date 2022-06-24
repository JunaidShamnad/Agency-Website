import {  Nav, Logo, Menu, Li } from "./Navbar.styled";
import { ThirdButton } from '../Button'
import {BsArrowRight} from 'react-icons/bs'

const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo></Logo>
        <Menu>
          <Li>About Us</Li>
          <Li>Portfolio</Li>
          <Li>Services</Li>
          <Li>Contact Us</Li>
        </Menu>
        <ThirdButton>Lets Talk <BsArrowRight/></ThirdButton>
      </Nav>
    </>
  );
};

export default Navbar;
