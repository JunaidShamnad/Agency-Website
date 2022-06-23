import styled from "styled-components";
import { HeadingH3,Paragraph,SecondaryButton,flexRowCenter,QuaternaryButton,flexCenter,flexColumnCenter,flexColumn,flexRow } from "../cssHelper";

export const Hero = styled.div`
    ${flexColumnCenter};
    margin-top: 100px;
    width: 100%;
`
export const Heading = styled.h1`
 ${HeadingH3};
 width: ${({theme})=>theme.width[5]};
 text-align:center;
`
export const HeroDescription = styled.p`
${Paragraph};
margin-top:25px;
`
export const HeroButtons = styled.div`
${flexRowCenter};
justify-content: space-between;
margin-top:40px;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumnCenter}
}

`
export const ImageContainer = styled.div`
${flexRowCenter};
width:80%;
justify-content: space-between;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumnCenter}
}
`
export const Image = styled.img`
width: ${({ theme })=>theme.width[2]};
height:700px;
border-radius: 10px;
@media(max-width:${({ theme })=>theme.breakpoints.mobile}){
    height:auto;
    margin-top: 10px;
};
`
export const ImageBelow = styled.img`
width: ${({ theme })=>theme.width[2]};
margin-top:${({ theme})=>theme.space[13]};
height:700px;
border-radius: 10px;
@media(max-width:${({ theme })=>theme.breakpoints.mobile}){
    height:auto;
    margin-top: 10px;
};
`
