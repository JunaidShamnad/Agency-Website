import styled from "styled-components";
import { HeadingH3,flexColumn,flexRow } from "../cssHelper";
import Image from 'next/image'

export const Heading = styled.h1`
 ${ HeadingH3 };
`;
export const Container = styled.div`
width:80%;
margin-left: auto;
margin-right: auto;
margin-bottom:50px;
`;
export const Span = styled.span`

`;
export const TestimonialsTitle = styled.h1`
${flexColumn}
font-size:100px;
position: relative;
width: 40%;
`;
export const UpperTestimonial = styled.div`
${flexRow}
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`;
export const SpanTitle = styled.span`
font-size: ${({ theme }) => theme.fontSizes?.xxxs};
transform:rotate(-18deg);
position:absolute;
margin-left: -30px;
`;
export const TestimonialsDesigination = styled.p`
font-size:20px;
`;
export const TestimonialsName = styled.h2`
margin-bottom:15px;
`;
export const TestimonialsContent = styled.div`
border-top: 2px solid #000000;
width: 75%;
padding-top: 50px;
margin-left: 50px;
${flexColumn}
`;
export const TestimonialsImage = styled.div`
min-width:29.5%;
height:720px;
border-radius:40%;
position: relative;
div{
    height: 75%;
    bottom: 39px;
    width: 100%;
    border-radius: 40%;
    background-color: red;
    position: absolute;
}
`;
export const TestimonialsImg = styled(Image)`
width: 100%;
position: absolute;
height: 100%;
z-index: 999;
bottom: 0;
`;

export const LowerTestimonial = styled.div`
${flexRow}
justify-content: space-between;
align-items:center;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`;
export const TestimonialsIcons = styled.div`

`;
export const TestimonialsDescription = styled.p`
width: 27%;
line-height: 25px;
`;
export const TestimonialDescription = styled.p`
font-size:30px;
width: 100%;
/* color:#7e7e81; */
margin-bottom: 50px;
line-height: 40px;
`;
export const TestimonialContentSection = styled.div`
padding-top: 50px;
padding-bottom: 50px;

`;



