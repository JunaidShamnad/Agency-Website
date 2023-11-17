import React,{ useState, useEffect } from "react";
import Links from "../../../data/menuLinks";
import LogoImage from "/public/images/62375b2bd5c8856bf9e4f5df_Logo.png";
import {
  Logo,
  LogoText,
  MenuIcon,
  MobileMenu,
  Nav,
  NavContainer,
  NavItem,
  NavLink,
  NavLinkA,
  NavMenu,
} from "./ChildNavbar.styled";
import Link from "next/link";


const ChildNavbar = ({ toggle}) => {
  const [scrollNav, setScrollNav] = useState(false);

  const LogoValue = "text";


  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    
    <Nav  scrollNav={scrollNav} >
      <NavContainer>
        <NavLink href="/">
         <NavLinkA aria-label="Intelpik Home">{LogoValue === "text" ? <Link href="https://intelpik.com/"><LogoText>Intelpik.</LogoText></Link> :<Logo src={LogoImage.src} alt="logo" />}</NavLinkA>
        </NavLink>
        <MobileMenu onClick={toggle}>
          <MenuIcon />
        </MobileMenu>
        <NavMenu>
          {Links.map((link) => (
            <NavItem key={link.id}>
              <NavLink href={link.to}>
                <NavLinkA role="button"> {link.name}</NavLinkA>
              </NavLink>
            </NavItem>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
    
  );
};

export default ChildNavbar;
