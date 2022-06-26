import styled from "styled-components";
import { HeadingH3,flexRow } from "../cssHelper";


export const Container = styled.div`
 display:grid;
 grid-template-columns: 1fr 1fr 1fr;
 width:90%;
 margin-left: auto;
 margin-right: auto;
 padding-top: 50px;
 
 border-top:3px solid #000;
 @media (max-width: ${({ theme }) => theme.breakpoints.mobile }) {
    display:grid;
    grid-template-columns: 1fr 1fr;
 }
`;

export const FooterTitles = styled.h1`
 font-size: 20px;
 font-weight: 500;
 margin-bottom:50px;
 @media (max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size:11px;
    width:78%;
    margin-bottom: 25px;
 }
`;

