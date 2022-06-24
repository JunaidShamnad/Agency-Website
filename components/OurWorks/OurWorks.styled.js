import styled from "styled-components";
import { HeadingH3,flexRow,flexColumn } from "../cssHelper";


export const Section = styled.section`
  width: 100vw;
  max-width: 1600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-x: hidden;
  height: 100%;

`;

export const Container = styled.div`
  height: 100%;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    /* ${flexColumn} */
  } ;
`;


export const WorkOne = styled.div`
place-content:center;
`
export const WorkTitle = styled.h1`
width:60%;
line-height:140%;
margin-bottom: 10px;
`
export const Work = styled.div`
border-top:1px solid #000;
padding-top: 20px;
`;

export const WorkTwo = styled.div`

height: 750px;
justify-content: center;
`;

export const WorkThree = styled.div``;
export const WorkDescription = styled.p`
font-size:15px;
margin-bottom:25px;
line-height:140%;
`
export const WorkHeading = styled.h1`
font-size: 64px;
width: 100%;
margin-bottom:50px;
`;
export const WorkLinkImage = styled.img``;
export const WorkImage = styled.img`
width:20rem;
height:20rem;
object-fit: cover;
object-position:center;
`;


export const WorkInnerContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr 1fr;
grid-template-rows:1fr;
grid-gap:2rem;
max-width:100%;

@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  grid-template-columns:1fr;
   grid-template-rows:1fr 1fr 1fr;
   place-items:center;
    /* ${flexColumn} */
  } ;
`