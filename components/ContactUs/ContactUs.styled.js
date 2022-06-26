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
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
  width:100%;
}
`;
export const RightSection = styled.div`
width:50%;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
  width:100%;
}
`;
export const TitleContact = styled.h1`
  font-size:125px;
  ${flexColumn}
  margin-bottom:100px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width:100%;
    font-size:62px;
}
`;
export const Span = styled.span`
font-size:${({theme})=>theme.fontSizes?.xxxs};
transform:rotate(-18deg);
position: absolute;
top:0;
margin-left:-25px;
margin-top: -20px;

`;
export const Contact = styled.div`
${flexRow}
height:215px;
align-items:center;
border-top:4px solid #000;
width:85%;
justify-content:space-between;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
justify-content:space-between;
width: 100%;
}
`;

export const ContactDetails = styled.div`
@media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}){
  width:100%;
}
`;
export const Detail = styled.div`
margin-left:50px;
width:75%;
@media (max-width:${({ theme }) => theme.breakpoints.mobile}){
  margin-left:0;
  width: 50%;
}
`;
export const DetailTitle = styled.h1`
font-size:22px;
font-weight: normal;
margin-bottom: 10px;
`;
export const DetailIcons = styled.div`
width:70px;
height: 70px;
background:#000;
border-radius: 50%;
@media (max-width:${({ theme }) => theme.breakpoints.mobile}){
  height:60px;
  width:60px;
}
`;
export const DetailDescription = styled.p`
font-size:35px;
font-weight: 600;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  font-size:15px;
  width:100%;
}
`;
export const ContactLinkImage = styled.img`

`;
export const Title = styled.h1`

`;