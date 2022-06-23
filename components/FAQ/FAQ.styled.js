import styled from "styled-components";
import { HeadingH3,flexColumn,flexRow, } from "../cssHelper";

export const Heading = styled.h1`
 ${ HeadingH3 };
`;
export const Faq = styled.div`
 width:100%;
 padding-top:30px;
 padding-bottom:30px;

`;
export const FaqsSection = styled.div`
width:80%;
${flexRow};
border-top:1px solid #c4c4c4;
border-bottom:1px solid #c4c4c4;
align-items:center;
justify-content: space-between;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`;
export const Container = styled.div`
${flexColumn}
align-items:center;
justify-content: center;
margin-bottom:150px;
`;
export const LeftSection = styled.div`
${flexColumn}
`;
export const RightSection = styled.div`
height: 100%;
${flexRow}
align-items:center;
justify-content: center;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`;
export const FaqIndex = styled.h1`
font-size:50px;
`;
export const FaqQuestion = styled.p`
font-size:50px;
margin-top:15px;
font-weight:800;
`;
export const FaqAnswer = styled.p`
font-size:30px;
color:#656665;
margin-top:15px;
`;
export const Icon = styled.p`
font-size: 50px;
background-color:#000;
padding: 5px 20px;
border-radius: 50%;
color:#fff;

`;

