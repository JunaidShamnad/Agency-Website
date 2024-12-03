import styled from "styled-components";
import { HeadingH3, flexRow, flexColumn, PrimaryButton, MainHeading } from "../cssHelper";
import { theme } from "../Theme";
import Slider from "react-slick";

export const Section = styled.section`
  width: 100vw;
  height: 100%;
  max-width: 100%;
  display: flex;
  color:white;
  align-items: center;
  justify-content: center;
  padding: 40px 0 80px 0;
  background: ${theme.colors.primaryBackground};
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding: 40px 0;
  } ;
`;

export const Container = styled.div`
  height: 100%;
  width: 90%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
    /* ${flexColumn} */
  } ;
`;

export const WorkHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  padding-right: 40px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: start;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    margin-bottom: 25px;
  }
`

export const ArrowDiv = styled.div`
  display: flex;
  gap: 50px;
  font-size: xxx-large;
  & > * {
    cursor: pointer;
  }
  & > *:hover {
    color: gray;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top:20px;
  }
`

export const WorkOne = styled.div`
  width: 100%;
  place-content: center;
`;
export const WorkTitle = styled.h3`
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
export const WorkHeading = styled.h2`
  ${MainHeading}
`;

export const SubHeading = styled.h4`
  font-size: 25px;
  margin-top:15px;
  font-weight:500;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 18px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    font-size: 16px;
  }
`
export const WorkLinkImage = styled.img``;

export const StyledSlider = styled(Slider)`
  cursor: grab;
`;

export const WorkDiv = styled.div`
   padding-right: 10px;
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    padding-right:0;
  }
`;

export const ImageDiv = styled.div`
  width:95%;
  height:450px;
  display:flex;
    flex-direction: column-reverse;
  padding: 40px;
  border-radius: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        width:98%;
  } ;
  
`

export const ViewButton = styled.button`
  ${PrimaryButton}
  width:fit-content;
  padding: 15px 60px;
    border-radius:10px;
    background: white;
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 15px 30px;
  } ;
`

export const WorkImage = styled.div`
  width: 100%;
  image-rendering: crisp-edges;
  height: 20rem;
  object-fit: cover;
  object-position: center;
  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    height: 25rem;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.smallTablet}){
    height: 25rem;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
    height: 20rem;
  }
`;

export const WorkInnerContainer = styled.div`
  width:100%;
  max-width: 100%;
  overflow:hidden;
  height: 100%;
  padding-top:2rem;
  padding-bottom:1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    /* ${flexColumn} */
  } ;
`;
