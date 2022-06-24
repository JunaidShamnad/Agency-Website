import styled from "styled-components";
import { flexColumn, divCenter, HeadingH3, HeadingH2 } from "../cssHelper";

export const Section = styled.section`
  width: 100vw;
  max-width: 1600px;
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
  } ;
`;

export const About = styled.div`
  margin-top: 1.5rem;
  width: ${({ theme }) => theme.width[10]};
  ${divCenter}
`;
export const AboutTitle = styled.h1`
  ${HeadingH2};
  width: ${({ theme }) => theme.width[8]};
  height: auto;
  word-wrap: break-word;
  color: #1d1a26;
  text-align: left;
  font-family: "Archivo Black", sans-serif;
  font-size: 190px;
  line-height: 260px;
  letter-spacing: 1px;
  padding: 10px;
  padding-bottom:1px;
  margin-top:2rem;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 5px 0;
    font-size:65px;
  }
`;

export const AboutContent = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 0.5fr;
  position: relative;
  width: 100%;
  height:78%;
  text-align: left;
  margin-top:1rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    grid-template-rows: 1fr 0.8fr;
    height:72%;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    grid-template-rows: 1fr 1fr;
    
  }
`;
export const AboutDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.s};
  width: ${({ theme }) => theme.width[10]};
  line-height: 130%;
  text-align: left;
  margin-bottom:10px;
  opacity:0.9;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xs};
    
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
    
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
    
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxs};

  }
`;
export const AboutQuote = styled.p`
  grid-row: 2/3;
  line-height:180%;
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin-top:20px;
    margin-bottom:20px;
  }
`;

export const AboutLink = styled.p``;

export const AboutImage = styled.img`
  width: ${({ theme }) => theme.width[8]};
  height: auto;
  max-height: 90%;
  
  object-fit: cover;
  object-position: center;
  margin-top: ${({ theme }) => theme.space[10]};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    max-height: 80vh;
    
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    max-height: 75vh;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    max-height: 50vh;
    
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxs};

  }
`;
export const AboutBelow = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  width: ${({ theme }) => theme.width[10]};
  height: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${flexColumn}
    flex-direction: column-reverse;
  }
`;

export const AboutContentLowerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;
