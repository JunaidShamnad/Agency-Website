import {Nav,Logo,Menu,Button,Ul,Li} from './Navbar.styled'

const Navbar = () => {
    return (
      <>
      <Nav>
        <Logo><img src="" alt="" /></Logo>
        <Menu>
          <Ul>
            <Li>Our Services</Li>
            <Li>Featured Projects</Li>
            <Li>About Us</Li>
            <Li>Contact Us</Li>
          </Ul>
        </Menu>
        <Button>Lets Talk&nbsp;&nbsp;</Button>
      </Nav>
      </>
    )
  }
  
  export default Navbar