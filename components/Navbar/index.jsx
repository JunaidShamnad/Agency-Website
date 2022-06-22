import { HeadingTitle, Nav, Logo, Menu, Li, Button } from "./Navbar.styled";

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
        <Button>Lets Talk</Button>
      </Nav>
    </>
  );
};

export default Navbar;
