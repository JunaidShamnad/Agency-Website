import styled from "styled-components";
import { flexRowCenter,flexColumnCenter } from "../cssHelper";


export const About  = styled.div`
margin-top: 150px;
`
export const AboutTitle = styled.h1`
 font-size: 300px;
 text-transform: uppercase;
`;

export const AboutContent = styled.div`
${flexColumnCenter}
height: 60vh;
position: relative;
width: 100%;
`
export const AboutDescription = styled.div`
font-size: 50px;
width: 87%;
position: absolute;
top: 50px;
text-align: right;
`
export const AboutQuote = styled.div`
margin-top:150px;
`
export const AboutLink = styled.div`
position: absolute;
right:50px;
bottom:0;
`
export const AboutImage = styled.img`
width:500px;
height:750px;
margin-top:50px;
`
export const AboutBelow = styled.div`
${flexRowCenter}
width: 95%;
`