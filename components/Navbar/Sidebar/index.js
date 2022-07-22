import Links from '../../../data/menuLinks';
import Link from 'next/link';
import {LogoText , CloseIcon, IconContainer, LogoContainer, SidebarContainer, SidebarMenu, SidebarMenuLink, SidebarMenuLinkA, SidebarMenuWrapper } from './Sidebar.styled'


const Sidebar = ({ isOpen,toggle}) => {
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
      {/* <LogoContainer>
        <Link href="/" passHref><a><LogoText>Intelpik.</LogoText></a></Link>
      </LogoContainer> */}
        <IconContainer onClick={toggle}>
            <CloseIcon/>
        </IconContainer>
        <SidebarMenuWrapper>
        {Links.map((link) => (
        <SidebarMenu key={link.id} onClick={toggle}>
        <SidebarMenuLink  href={link.to} >
         <SidebarMenuLinkA> {link.name}</SidebarMenuLinkA>
        </SidebarMenuLink>
        </SidebarMenu>
      ))}
        </SidebarMenuWrapper>
    </SidebarContainer>
   
  )
}

export default Sidebar