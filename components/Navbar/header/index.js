import React,{useState,useEffect} from 'react';
import {FaBars} from "react-icons/fa";
import { IconContext} from "react-icons/lib";
import { animateScroll as scroll } from "react-scroll";
import {Nav,NavItem,NavbarContainer,MobileIcon,NavMenu,NavBtn,Link} from './HeaderElements';

const Navbar = ({ toggle }) => {
    const [scrollNav,setScrollNav]=useState(false)
    
    
    const chnageNav=()=>{
      if(window.scrollY >= 80){
        setScrollNav(true)
      }else{
        setScrollNav(false)
      }
    };
    
    useEffect(()=>{
      window.addEventListener('scroll',chnageNav)
    },[]);
    
    
    const toggleHome=()=>{
      scroll.scrollToTop()
    };
    
    return (
        <>
        <IconContext.Provider value={{color:'#fff'}}>
          <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <div to="/" onClick={toggleHome}>
                   <img src="" alt="Logo"/>
              </div>
              <MobileIcon onClick={toggle}>
                <FaBars />
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                  <Link to="/about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      About
                  </Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/services" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      Services
                  </Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/contact-us" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      Contact Us
                  </Link>
                  </NavItem>
                  <NavItem>
                  <Link to="/sign-up" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      Sign Up
                  </Link>
                  </NavItem> 
                  {/* smooth={true} duration={500} spy={true} exact='true' offset={-80} */}
              </NavMenu>
              <NavBtn>
                  
              </NavBtn>
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>
        </>
    )
}

export default Navbar;
