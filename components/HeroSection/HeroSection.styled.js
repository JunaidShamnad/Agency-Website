import styled from "styled-components";
import { motion } from 'framer-motion';

import {
  HeadingH3,
  Paragraph,
  flexRowCenter,
  flexColumnCenter,
  PrimaryButton,
} from "../cssHelper";
import { theme } from "../Theme";

export const Section = styled.section`
    width: 100vw;
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-column: 1fr 1fr;
    max-width:100%;
  background-color: #5928e5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 50px;
  } ;
`;

export const Container = styled(motion.div)`
  height: 100%;
  width: 90%;
  max-width:1600px;
  display: flex;
  align-items: center;
  padding-top: 5rem;
  padding-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    width: 90%;
    padding-top: 1rem;
    padding-bottom: 1rem;
  } ;
`;
export const Hero = styled(motion.div)`
  margin-top: 1.9rem;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding-bottom:0;
    margin-bottom:70px;
  } ;
`;
export const Heading = styled(motion.h1)`
  ${HeadingH3};
  width: ${({ theme }) => theme.width[10]};
  height: auto;
  word-wrap: break-word;
  word-spacing:1px;
  color:#FFF2F2;
  font-family: "Grifter-bold", sans-serif;
  font-weight:800;
  font-size:3rem;
  line-height:80px;
  letter-spacing: 1.2px;
  padding-right: 140px;
  margin: 1rem 0;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    font-size:2.5rem;
  } 
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    font-size:3rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size:2.5rem;
    margin: 5px 0;
    padding-right: 0px;
  }   
`;
export const HeroDescription = styled(motion.p)`
  ${Paragraph};
  color:#FFF2F2;
  opacity:0.9;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight:500;
  margin-top: 25px;
  font-size: 20px;
  line-height:45px;
  padding: 5px;
  letter-spacing: 0.5px;
  opacity: 0.8;
  width: 80%;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 8px;
    width: 85%;
    line-height:20px;
  } ;
`;
export const HeroButtons = styled.div`
  ${flexRowCenter};
  
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top:28px;
  }
`;

export const HeaderButton = styled.button`
  ${PrimaryButton}
  background-color:#FEC9C1;
  color:#0D0A19;
  margin-top: 40px;
`;

export const StarDiv = styled.div`
  border-top:0.1px solid #ada9a9;
  width:60%;
  margin-top:110px;
  padding-top:40px;
  padding-bottom:15px;
  display:flex;
  gap:10px; 
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top:30px;
  }
`

export const StarImg = styled.img`
  width:1.5rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width:1.2rem;
  }
`

export const ShowText = styled.p`
  color: #d9d9d9;
  font-size:18px;
`

export const PeopleFaces = styled.img`
  margin-top:15px;
  width: 10rem;
  height:60px;
  object-fit: contain;
  @media (max-width: ${({ theme }) => theme.breakpoints.laptop}) {
    
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    width: 9rem;
  }
`

export const ClientSection = styled.section`
    width: 100vw;
    height: 100%;
    display: grid;
    place-items: center;
    grid-template-column: 1fr;
    max-width:100%;
  background-color: #5928e5;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    flex-direction: column;
    align-items: center;
  } ;
`;

export const ClientsContainer = styled.div`
  width:90%;
  max-width: 1600px;
  overflow: hidden;
  padding: 30px 0px;
  background: ${theme.colors.primaryBackground}
`

export const ClientLogoDiv = styled.div`
  display: grid;
  place-items: center;
  border:0px;
  cursor:grab;
  height: 70px;
  padding:10px 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    height: 60px;
  } ;
`

export const ClientLogo = styled.img`

`

export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  max-width:100%;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 50vh;
    margin-top: 0.2rem;
  }
`;
export const Image = styled.img`
  width: ${({ theme }) => theme.width[2]};
  height: auto;
  min-height: 84%;
  max-height: 85%;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  } ;
`;
export const ImageBelow = styled.img`
  width: ${({ theme }) => theme.width[2]};
  margin-top: ${({ theme }) => theme.space[13]};
  height: auto;
  min-height: 84%;
  max-height: 85%;
  border-radius: 10px;
  object-fit: cover;
  object-position: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  }
  /* @media(max-width:${({ theme }) => theme.breakpoints.mobile}){
    display:flex;
    justify-content:center;
    align-items:center;
    margin:0 auto;
    width:100%;
    height:100%;
}; */
`;
export const HeaderMobileImage = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: block;
    background-image: url("https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80");
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    background-repeat: no-repeat;
    height: 80%;
    width: 90vw;
    max-width:100%;
  } ;
`;
