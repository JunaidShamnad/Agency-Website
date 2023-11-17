import styled from "styled-components";
import { theme } from "../Theme";
import { MainHeading, PrimaryButton, QuaternaryButton, SecondaryButton, TeritaryButton } from "../cssHelper";

export const Section = styled.div`
    width: 100%;
    display: grid;
    place-items: center;
    padding: 80px 0;
`

export const Container = styled.div`
    width: 90%;
    max-width: 1600px;
    display: grid;
    grid-template-columns: 2fr 3fr; /* Define columns for desktop layout */
    grid-template-rows: auto 1fr;
    grid-auto-flow: column;
    gap: 40px;
    @media (max-width: 990px) {
        gap: 30px;
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
        gap:30px;
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        grid-template-columns: 2fr 2fr;
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
        grid-template-columns: 1fr; /* Single column layout for mobile */
        grid-template-rows: 160px 3fr 2fr;
        grid-auto-flow: unset;
    };
`

export const Left = styled.div`
    display:flex;
    flex-direction: column;
    
} ;
  
`

export const Right = styled.div`
    display: grid;
    grid-templates-row: 1fr 1fr 1fr;
    grid-row: span 2 / span 2;
    @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
        grid-row: auto;
    } ;
`

export const LeftHeader = styled.div`
    margin-bottom:20px;
    & > * {
        margin-bottom: 20px;
    }
`

export const LeftCaption = styled.h4`
color: #353535;
text-align: left;
text-transform: uppercase;
font-size: 22px;
@media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
  font-size:16px;
}
@media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
  font-size:16px;
}
`

export const LeftHeading = styled.h2`
    ${MainHeading}
    @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
        font-size: 2.5rem;
    };
`

export const LeftDescription = styled.p`
width: 70%;
font-weight: 500;
font-size: 16px;

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
    padding:20px;
    /* Add aria-label for accessibility */
  &::before {
    content: "";
    display: block;
    height: 0;
    width: 0;
    overflow: hidden;
    visibility: hidden;
    aria-label: "A female teammate shaking hands with a client";
  }
    @media (max-width: 950px) {
        width:100%;
    };
     @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
        width:100%;
        padding:30px;
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
        width:100%;
        padding:20px;
        order: 3;
    };
   
`

export const BeginButton = styled.button`
    ${PrimaryButton}
    width: 100%;
    background: white;
    @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
        padding: 16px 35px;
    };
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
    @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
        padding: 30px 20px;
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        flex-direction: column;
        padding: 20px 0px;
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
        flex-direction: column;
        padding: 40px 0px;
    };
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
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        & h2 {
            font-size: 2rem;
        }
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
        padding: 40px 20px;
        & h2 {
            font-size: 1.6rem;
        }
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width:100%;
        padding: 20px 30px;
        & h2 {
            font-size: 3rem;
        }
    };
    @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
        padding: 40px 0px;
    };
`
export const RightParagraph = styled.p`
    padding-left: 0.6rem;
    line-height: 1.5rem;
    width: 60%;
    color:#2f2f2f;
    font-weight: 500;
font-size: 16px;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width:100%;
        text-align: center;
        padding-left: 0rem;
        line-height: 1.3rem;
    } ;
    @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
        width:85%;
        padding-left: 0.6rem;
        line-height: 1.5rem;
    } ;
`



