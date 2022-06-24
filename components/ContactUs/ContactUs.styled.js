import styled from "styled-components";
import { HeadingH3,flexColumn,flexRow,flexColumnCenter } from "../cssHelper";

export const Section = styled.section`
height:100vh;
`;
export const Container = styled.div`
width:85%;
display: flex;
justify-content: space-evenly;
margin-left: auto;
margin-right: auto;
margin-bottom:250px;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
}
`;
export const LeftSection = styled.div`
width:50%;
${flexColumn}
`;
export const RightSection = styled.div`
width:50%;
`;
export const TitleContact = styled.h1`
  font-size:125px;
  ${flexColumn}
  margin-bottom:100px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width:100%;
    font-size:75px;
}
`;
export const Span = styled.span`
font-size:${({theme})=>theme.fontSizes?.xxxs};
transform:rotate(-18deg);
position: absolute;
top:0;
margin-left:-25px;

`;
export const Contact = styled.div`
${flexRow}
height:215px;
align-items:center;
border-top:4px solid #000;
width:75%;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`;

export const ContactDetails = styled.div`

`;
export const Detail = styled.div`
margin-left:50px;
`;
export const DetailTitle = styled.h1`
font-size:22px;
font-weight: normal;
margin-bottom: 10px;
`;
export const DetailIcons = styled.div`
width:110px;
height: 110px;
background:#000;
border-radius: 50%;

`;
export const DetailDescription = styled.p`
font-size:35px;
font-weight: 600;
`;
export const ContactLinkImage = styled.img`

`;
export const Title = styled.h1`

`;