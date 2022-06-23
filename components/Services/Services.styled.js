import styled from "styled-components";
import { HeadingH3, flexColumn,flexRowCenter,flexColumnCenter} from "../cssHelper";

export const Heading = styled.h1`
 ${ HeadingH3 };
`

export const ServiceDescription = styled.p`
font-size:${({theme})=>theme.fontSizes?.xxs};
font-weight: normal;
width:75%;
`

export const ServiceHeading = styled.h3`
display: flex;
flex-direction: column;
width: 50%;
margin-left: 40px;

`
export const ServiceDetails = styled.div`
margin-top:100px;
width:50%;
height: 100vh;
justify-content: space-between;
`
export const ServiceList = styled.div`
width:30%;
${flexColumnCenter}
`
export const Service = styled.div`
${flexRowCenter}
width: 100%;
align-items: flex-start;
justify-content: space-between;
border-top:1px solid #000;
padding-top: 25px;
padding-bottom: 75px;
`
export const ServiceIndex = styled.h1`
font-size:${({theme})=>theme.fontSizes?.xxs};
`
export const ServiceTitle = styled.h2`
display:flex;
font-size:${({theme})=>theme.fontSizes?.m};
width:85%;
font-weight: 600;
flex-direction: column;
`
export const Span = styled.span`
font-size: ${({ theme }) => theme.fontSizes?.xxxs};
transform:rotate(-18deg);
margin-bottom: 75px;
margin-left: -40px;
`
export const ServiceLink = styled.p`
font-size:${({theme})=>theme.fontSizes?.xxxs};
margin-top:20px;
`
export const HorizontalLine = styled.span`
font-size: 35px;
margin-right: 15px;
`
export const ServiceContent = styled.div`
${flexRowCenter};
width: 100%;
margin-top: 150px;
margin-bottom: 150px;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`
export const ServicesText = styled.div`
${flexColumn};
width: 100%;
margin-bottom: 150px;
`
export const ServiceNavImage = styled.div`
${flexRowCenter};
width: 100%;
margin-bottom: 150px;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`


