import styled from "styled-components";
import {
  HeadingH3,
  Paragraph,
  flexRowCenter,
  flexColumnCenter,
  PrimaryButton,
} from "../cssHelper";

export const Section = styled.section`
  width: 100vw;
  max-width: 100%;
  max-width:1600px;
  overflow-x: hidden;
  height: 100%;
  background-color: #fff7f0;
`;

export const Container = styled.div`
  height: 100%;
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 5rem;
  padding-bottom: 4rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 1rem;
    padding-bottom: 1rem;
  } ;
`;
export const Hero = styled.div`
  ${flexColumnCenter};
  margin-top: 4.9rem;
  width: 100%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    /* padding-bottom:0;
    margin-bottom:0; */
  } ;
`;
export const Heading = styled.h1`
  ${HeadingH3};
  width: ${({ theme }) => theme.width[10]};
  height: auto;
  word-wrap: break-word;
  word-spacing:1px;
  color:#1D1A26;
  text-align: center;
  font-family: "Archivo Black", sans-serif;
  font-weight:800;
  font-size:150px;
  line-height:190px;
  letter-spacing: 1px;
  padding: 10px;
  margin: 1rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 5px 0;
  } ;
`;
export const HeroDescription = styled.p`
  ${Paragraph};
  font-family: 'Syne', sans-serif;
  font-weight:500;
  margin-top: 25px;
  font-size: 28px;
  line-height:45px;
  padding: 5px;
  letter-spacing: 0.5px;
  opacity: 0.8;
  width: 60%;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 8px;
    width: 85%;
  } ;
`;
export const HeroButtons = styled.div`
  ${flexRowCenter};
  justify-content: space-between;
  margin-top: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ${flexColumnCenter}
    margin-top:8px;
  }
`;

export const HeaderButton = styled.button`
  ${PrimaryButton}
  padding:16px 42px;
  font-size: 22px;
`;
export const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
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
  } ;
`;
