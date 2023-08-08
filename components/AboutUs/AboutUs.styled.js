import styled from "styled-components";
import { motion } from "framer-motion";
import { flexColumn, divCenter, HeadingH3, HeadingH2, flexRowCenter, flexColumnCenter, PrimaryButton } from "../cssHelper";

export const Section = styled.section`
  width: 100vw;
  max-width:100%;
  padding: 50px 0;
  background-color:#fff2f2 ;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: fit-content;  
  } ;
`;

export const Container = styled.div`
  width: 90%;
  max-width:1600px;
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
  @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    flex-direction: column;
  } ;
  
`;

export const About = styled.div`
  margin-top: 1.5rem;
  width: ${({ theme }) => theme.width[10]};
  ${divCenter}
  margin-bottom: 2.5rem;
`;
export const AboutTitle = styled.h1`
  ${HeadingH2};
  width: ${({ theme }) => theme.width[8]};
  word-wrap: break-word;
  color: #5928e5;
  text-align: left;
  font-family: "Grifter-bold", sans-serif;
  font-size: 60px;
  line-height: 60px;
  letter-spacing: 1px;
  padding-bottom:1px;
  text-transform: uppercase;
  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    font-size:55px;
    margin: 0px 0px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 5px 0;
    font-size:55px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    margin: 5px 0;
    font-size:40px;
  }
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  color:#0D0A19;
  position: relative;
  width: 100%;
  height:100%;
  text-align: left;
  padding:0 10px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    grid-template-rows: 1fr 0.8fr;
    height:72%;
    gap: 20px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    grid-template-rows: 1fr 1fr;
    gap: 20px;
    
  }
`;
export const AboutDescription = styled.p`
  font-size: 22px;
  width: ${({ theme }) => theme.width[10]};
  line-height: 155%;
  font-family: "Plus Jakarta Sans", sans-serif;
  text-align: left;
  color:#0D0A19;
  margin-bottom:10px;
  opacity:0.6;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
    margin-bottom:0px; 
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
  margin-bottom:0px;
    
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
  margin-bottom:0px;
    
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxs};
    margin-bottom:0px;

  }
`;
export const AboutQuote = styled.p`
  grid-row: 2/3;
  line-height:180%;
  color:#0D0A19;;
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    margin-top:20px;
    margin-bottom:20px;
  }
`;

export const AboutLink = styled.p`
color:#0D0A19;;
cursor:pointer;
text-decoration:underline;
`;

export const AboutButton = styled.button`
${PrimaryButton}
background-color:#5928e5;
color:white;
border-radius:10px;
font-size: 22px;
width: 200px;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
height:60px;
  }
`;

export const AboutImageDiv = styled(motion.div)`
  height: auto;
  padding-right: 30px;
`;

export const AboutImage = styled.img`
  width: ${({ theme }) => theme.width[10]};
  height: 600px;
  
  object-fit: cover;
  object-position: center;


  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    max-height: 500px;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    max-height: 400px;
    
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxs};

  }
`;
export const AboutBelow = styled.div`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: 1fr 1fr;
  width: ${({ theme }) => theme.width[10]};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${flexColumn}
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    display: flex;
    flex-direction:column;
  } ;
`;

export const AboutContentLowerContainer = styled.div`
  display: flex;
  color:#0D0A19;;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
  }
`;
