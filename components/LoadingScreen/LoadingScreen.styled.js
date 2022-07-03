import styled from 'styled-components';

export const Screen = styled.div`
 position:relative;
 width:100%;
 height:100vh;
 background:#000;
 display:flex;
 justify-content:center;
 align-items:center;
`;

export const Container = styled.div`
 width:100%;
 height:100%;
 margin:0 auto;
 display:flex;
 flex-direction:column;
 justify-content:center;
 align-items:center;
 text-align:center;
 
`
export const Title = styled.h1`
color:#fff;
font-size:9rem;
letter-spacing:1.1px;
line-height:130%;
margin-bottom:1rem;
@media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxl};
  
  }
  @media screen and (max-width: ${({ theme }) =>theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xl};
  
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.l};
  
  }
  /* @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.m};
    line-height: ${({ theme }) => theme.fontSizes?.l};
  } */
  /* @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
    line-height: ${({ theme }) => theme.fontSizes?.m};
  } */
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.extraSmallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
    
  }
`
export const Tagline = styled.h3`
color:#fff;
letter-spacing:1px;
font-size:1.5rem;
font-weight:500;
line-height:160%;
@media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxxs};
  
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxxxs};
    
  }
`