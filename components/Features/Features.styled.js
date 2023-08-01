import styled from "styled-components";
import { theme } from "../Theme";
import { PrimaryButton, QuaternaryButton, SecondaryButton, TeritaryButton } from "../cssHelper";

export const Section = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    padding: 80px 0;
`

export const Container = styled.div`
    width: 80%;
    display: flex;
    gap: 40px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    width:80%;
    padding:20px;
  } ;
    @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    gap:20px;
  } ;
`

export const Left = styled.div`
    width:45%;
    display:flex;
    flex-direction: column;
    padding-bottom: 20px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
      height:850px;
  } ;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    width: 100%;
    height:650px;
} ;
  
`

export const Right = styled.div`
    width: 60%;
    display: grid;
    grid-templates-row: 1fr 1fr 1fr;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width:100%;
  } ;
`

export const LeftHeader = styled.div`
    margin-bottom:20px;
    & > * {
        margin-bottom: 20px;
    }
`

export const LeftCaption = styled.p`
    color: gray;
    font-weight: bold;
`

export const LeftHeading = styled.h1`
    font-size: 3.5rem;
    font-family: "Grifter-bold", sans-serif;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        font-size: 3rem;
  } ;
`

export const LeftDescription = styled.p`
    width: 70%;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width:90%;
  } ;
`;

export const LeftImg = styled.div`
    flex: 1;
    width:90%;
    border-radius: 10px;
    background: url("/images/img-43.jpeg");
    background-size: cover;
    background-position: center;
    display:flex;
    flex-direction: column-reverse;
    padding:10px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width:100%;
  } ;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    width:95%;
  } ;
`

export const BeginButton = styled.button`
    ${PrimaryButton}
    border-radius:10px;
    background: white;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 15px 0px;
  } ;
`

export const RightSections = styled.div`
    padding: 50px 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    border-bottom: .5px solid #c6c4c4;
    &:first-child {
        border-top:   .5px solid #c6c4c4;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
  } ;
`

export const Numbers = styled.div`
    width: 40%;
    padding: 40px 30px;
    background: #fec9c1;
    border-radius: 10px;
    & h2 {
        font-size: 3rem;
    }
    text-align: center;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width:80%;
  } ;
`
export const RightParagraph = styled.p`
    padding-left: 0.6rem;
    line-height: 1.5rem;
    width: 60%;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width:80%;
        text-align: center;
    } ;
`



