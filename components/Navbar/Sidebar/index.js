import Links from '../../../data/menuLinks';
import { CloseIcon, IconContainer, SidebarContainer, SidebarMenu, SidebarMenuLink, SidebarMenuLinkA, SidebarMenuWrapper } from './Sidebar.styled'

const Sidebar = ({ isOpen,toggle}) => {
  return (
    
    <SidebarContainer isOpen={isOpen} onClick={toggle} >
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