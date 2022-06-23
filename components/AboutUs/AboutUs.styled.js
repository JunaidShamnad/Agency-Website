import styled from "styled-components";
import { flexRowCenter,flexColumnCenter,flexRow,flexColumn,divCenter } from "../cssHelper";


export const About  = styled.div`
margin-top: ${({ theme})=>theme.space[13]};
width: ${({ theme})=>theme.width[10]};
${divCenter}
`
export const AboutTitle = styled.h1`
 font-size: ${({ theme})=>theme.fontSizes.xxxxxxxl};
 text-transform: uppercase;
`;

export const AboutContent = styled.div`
${flexColumnCenter}
height: ${({ theme})=>theme.height[5]};
position: relative;
width: ${({ theme})=>theme.width[9]};
`
<<<<<<< HEAD
export const AboutDescription = styled.div`
font-size: ${({ theme})=>theme.fontSizes.ms};
width: ${({ theme})=>theme.width[9]};
margin-right: ${({ theme})=>theme.space[15]};
=======
export const AboutDescription = styled.p`
font-size: 50px;
width: 100%;
margin-right: 100px;
>>>>>>> 3c91b7b11e1a420493709356a3b03cdc9ff7908a
position: absolute;
top: ${({ theme})=>theme.space[10]};
text-align: right;
`
<<<<<<< HEAD
export const AboutQuote = styled.div`
margin-top:${({ theme})=>theme.space[13]};
=======
export const AboutQuote = styled.p`
margin-top:150px;
>>>>>>> 3c91b7b11e1a420493709356a3b03cdc9ff7908a
`
export const AboutLink = styled.p`
position: absolute;
right:${({ theme})=>theme.space[10]};
bottom:0;
`
export const AboutImage = styled.img`
width:${({ theme})=>theme.width[2]};;
height:750px;
margin-top:${({ theme})=>theme.space[10]};
`
export const AboutBelow = styled.div`
${flexRowCenter}
width: ${({ theme})=>theme.width[8]};

@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn} 
}
`