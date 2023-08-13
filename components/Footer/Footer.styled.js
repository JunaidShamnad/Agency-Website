import styled from "styled-components";
import { HeadingH3,flexRow } from "../cssHelper";
export const Section = styled.section`
   width: 100vw;
    height: 100%;
    max-width:100%;
    border-top:3px solid #0D0A19;
`;
export const Container = styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr 1fr;
 width:90%;
 max-width:1600px;
margin:0 auto;
 padding-top: 45px;
 text-align:center;

 @media (max-width: ${({ theme }) => theme.breakpoints.mobile }) {
    display:grid;
    grid-template-columns: 1fr;
    grid-template-rows:1fr 1fr 1fr ;
    place-items:center;
    padding-top: 20px;
 }
`;

export const FooterTitles = styled.h1`
 font-size: 20px;
 font-weight: 500;
 margin-bottom:50px;
 cursor:pointer;
 @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size:11px;
    width:90%;
    margin-bottom: 12px;
    text-align:center;
 }

 :nth-child(3){
   text-align:center;
 }
`;

