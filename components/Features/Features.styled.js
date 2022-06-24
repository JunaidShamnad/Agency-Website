import styled from "styled-components";
import {SecondaryButton, HeadingH3,flexRow,flexColumn,gridTwo } from "../cssHelper";

export const Container = styled.div`
${flexColumn}
justify-content: space-between;
align-items: center;
width:90%;
margin-top:200px;
margin-bottom:200px;
margin-left: auto;
margin-right: auto;
`
export const LeftSection = styled.div`
${flexColumn}
height:100%;
width: 90%;
justify-content: space-between;
`
export const RightSection = styled.div`
${gridTwo};
width:100%;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    grid-template-columns:auto;
}
`

export const Feature = styled.div`
width:90%;
`
export const Icon = styled.div``
export const FeatureTitle = styled.h2`
font-size: ${({theme})=>theme.fontSizes?.xs};
margin-bottom: ${({ theme }) => theme.space[9]};
font-weight: ${({ theme }) => theme.fontWeights.semibold};
`
export const FeatureDescription = styled.p`
font-size: ${({theme})=>theme.fontSizes?.xxs};
`
export const LeftSideHeading = styled.h1`
font-size:75px;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size:65px;
}
`
export const Span = styled.span`
font-style: italic;
`
export const SectionOne = styled.div`
${flexRow}
margin-bottom:${({ theme }) => theme.space[11]};
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`
export const AboveContainer = styled.div`
margin-bottom:${({ theme }) => theme.space[8]};

`
export const AboveContainerHeading = styled.h1`
font-size:${({ theme }) => theme.fontSizes?.xl};
margin-bottom:${({ theme }) => theme.space[11]};
font-weight:${({ theme }) =>theme.fontWeights.medium};
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 65px;
}
`
export const SectionOneDetails = styled.div`

`
export const SectionOneDetailsHead = styled.h1`
font-size:${({ theme }) => theme.fontSizes?.ms};
margin-bottom:${({ theme }) => theme.space[9]};
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 30px;
}
`
export const SectionOneDetailsDescription = styled.p`
font-size: ${({ theme }) => theme.fontSizes?.xxs};
width:70%;
margin-bottom:${({ theme }) => theme.space[5]};
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
    width:100%;
    font-size:21px;
} 
`
export const SectionOneImage = styled.div`

`
export const SectionOneImageDate = styled.p`
font-size:${({ theme }) => theme.fontSizes?.xxs};
font-weight:${({ theme }) => theme.fontWeights.bold};
margin-bottom:${({ theme }) => theme.space[10]};

`
export const SectionOneImageImg = styled.img`

`
export const SectionTwoImageImg = styled.img`
width: 90%;
`
export const SectionTwoImage = styled.div`
width:53%;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width:100%;
}
`
export const SectionTwo = styled.div`
${flexRow};
justify-content: space-between;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`
export const BelowConatiner = styled.div`
${flexRow}
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`
export const SectionTwoIndex = styled.h1`
font-size: ${({ theme }) => theme.fontSizes?.xxs};
font-weight:${({ theme }) => theme.fontWeights.semibold};
`

export const SectionTwoContentHead = styled.h2`
font-size:${({ theme }) => theme.fontSizes?.xs};
font-weight:${({ theme }) => theme.fontWeights.semibold};
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width:100%;
    font-size: 30px;
}
`
export const SectionTwoContentDescription = styled.p`
font-size: ${({ theme }) => theme.fontSizes?.xxs};
font-weight:${({ theme }) => theme.fontWeights.medium};
width: ${({ theme }) => theme.width[6]};
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width:100%;
    font-size:22px;
}
`
export const LeftSectionParagraph = styled.p`
width:70%;
line-height:45px;
/* line-height:${({ theme }) => theme.lineheight} */
font-size:30px;
margin-top:200px;
margin-bottom:100px;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width:100%;
}
`
export const Form = styled.form`
width:75%;
${flexRow}
justify-content: space-between;
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
width:100%;
}
`
export const Input = styled.input`
border:none;
height:70px;
width:450px;
outline:none;
border-bottom:1px solid #d1cfce;
`
export const Button = styled.button`
${SecondaryButton}
outline:none;
`
export const ParagraphSpan = styled.div`
font-weight:bold;
`
export const SectionTwoDetails = styled.div`
${flexColumn}
width:47%;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width:100%;
}
`
export const SectionTwoDetail = styled.div`
${flexRow}
width: 100%;
justify-content: space-between;
margin-bottom: ${({ theme})=>theme.space[6]};
@media (max-width:${({ theme })=>theme.breakpoints.mobile}){
${flexColumn}
}
`
export const SectionTwoContent = styled.div`

`