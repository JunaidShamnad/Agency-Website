import React,{useState,useEffect} from 'react';
import {HiOutlineMenuAlt3} from "react-icons/hi";

import { IconContext} from "react-icons/lib";
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
    
    
    // const toggleHome=()=>{
    //   scroll.scrollToTop()
    // };
    
    return (
        <>
        <IconContext.Provider value={{color:'#000'}}>
          <Nav scrollNav={scrollNav}>
          <NavbarContainer>
              <div to="/">
                   {/* <img src="" alt="Logo"/> */}
                   <h3>Intelpik</h3>
              </div>
              <MobileIcon onClick={toggle}>
                <HiOutlineMenuAlt3/>
              </MobileIcon>
              <NavMenu>
                  <NavItem>
                  <Link href="/about" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      About
                  </Link>
                  </NavItem>
                  <NavItem>
                  <Link href="/services" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      Services
                  </Link>
                  </NavItem>
                  <NavItem>
                  <Link href="/contact-us" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      Contact Us
                  </Link>
                  </NavItem>
                  <NavItem>
                  <Link href="/sign-up" smooth={true} duration={500} spy={true} exact='true' offset={-80} activeStyle>
                      Sign Up
                  </Link>
                  </NavItem> 
                  {/* smooth={true} duration={500} spy={true} exact='true' offset={-80} */}
              </NavMenu>
              {/* <NavBtn>
                  
              </NavBtn> */}
              </NavbarContainer>
          </Nav>
          </IconContext.Provider>
        </>
    )
}

export default Navbar;
