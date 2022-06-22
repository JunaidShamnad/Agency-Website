import styled from "styled-components";
import { HeadingH3,Paragraph,SecondaryButton,QuaternaryButton,flexRow,flexColumn } from "../cssHelper";

export const HeadingTitle = styled.h1`

`
export const Nav = styled.div`
${flexRow}
width:90%;
margin-top:25px;
align-items:center;
margin-bottom:25px;
justify-content: space-between;
`
export const Logo = styled.div`
width: 35%;
`
export const Menu = styled.ul`
${flexRow}
width: 40%;
justify-content: space-between;

`
export const Li = styled.li`
list-style-type: none;


`
export const Button = styled.button`
${QuaternaryButton}

`

