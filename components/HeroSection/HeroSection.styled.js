import styled from "styled-components";
import { HeadingH3,Paragraph,SecondaryButton,flexRowCenter,QuaternaryButton,flexCenter,flexColumnCenter } from "../cssHelper";

export const Hero = styled.div`
    ${flexColumnCenter};
    margin-top: 100px;
    width: 100%;
`
export const Heading = styled.h1`
 ${HeadingH3};
 width: 60%;
 text-align:center;
`
export const HeroDescription = styled.p`
${Paragraph};
margin-top:25px;
`
export const HeroButtons = styled.div`
${flexRowCenter};
width: 20%;
justify-content: space-between;
margin-top:40px;

`
export const ImageContainer = styled.div`
${flexRowCenter};
width:80%;
justify-content: space-between;
`
export const Image = styled.img`
width: 450px;
height:700px;
border-radius: 10px;
`
export const ImageBelow = styled.img`
width: 450px;
margin-top: 150px;
height:700px;
border-radius: 10px;
`
