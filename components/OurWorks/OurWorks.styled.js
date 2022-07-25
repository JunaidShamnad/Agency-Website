import styled from "styled-components";
import { HeadingH3, flexRow, flexColumn } from "../cssHelper";

export const Section = styled.section`
  width: 100vw;
  height: 100%;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #5928e5;
  color:#fff2f2;
`;

export const Container = styled.div`
  height: 100%;
  width: 90%;
  max-width: 1600px;
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
  place-content: center;
`;
export const WorkTitle = styled.h2`
  width: 100%;
  line-height: 140%;
  margin-top:1rem;
  margin-bottom: 10px;
  color:#fff2f2;
  font-weight:500;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size:25px;
   
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smalestMobile}) {
    font-size: 20px;
  }
`;
export const Work = styled.div`
  border-top: 1px solid #fec9c1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const WorkTwo = styled.div`
  margin-top: 25%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-top: 0;
  } ;
`;

export const WorkThree = styled.div``;

export const WorkDescription = styled.p`
  font-size: 14px;
  margin-bottom: 25px;
  letter-spacing:0.8;
  line-height: 140%;
  opacity:0.8;
`;
export const WorkHeading = styled.h1`
  font-size: 64px;
  width: 100%;
  margin-bottom: 50px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 38px;
    width: 50%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smalestMobile}) {
    font-size: 35px;
    width: 50%;
  }
`;
export const WorkLinkImage = styled.img``;
export const WorkImage = styled.img`
  width: 20rem;
  image-rendering: crisp-edges;
  height: 20rem;
  object-fit: cover;
  object-position: center;
`;

export const WorkInnerContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  max-width: 100%;
  height: 100%;
  margin-bottom: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.8fr 0.8fr;
    place-items: center;
    /* ${flexColumn} */
  } ;
`;
