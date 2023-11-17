import styled, { css } from 'styled-components'
import { MainHeading, flexColumnCenter, flexRowCenter } from '../cssHelper';
import Slider from 'react-slick';
import { theme } from '../Theme';

export const Section = styled.section`
    width: 100vw;
    height: 100%;
    max-width: 100%;
    background-color: ${theme.colors.primaryBackground};
    padding: 60px 0px;
    display: flex;
    justify-content: center;
    color:white;
    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      padding: 60px 0px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
      padding: 40px 0px;
    }
 `;

export const Container = styled.div`
    width: 90%;
    max-width: 1600px;
    padding-top:30px;
    display: flex;
    flex-direction: column;
 `;

export const Testimonials = styled(Slider)`
.slick-dots {
  display: block;
  /* Add other custom styles for the dots */
}
    width:100%;
    max-width: 100%;
    overflow: hidden;
    display: grid;
    place-items: center;
`;

export const TestimonialDiv = styled.div`
    padding:25px 50px 10px 0px;
    margin-bottom: 40px;
    border-radius: 15px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      padding:25px 50px 20px 0px;
      height: 400px;
    }
    @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
      padding:0px;
    };
 `;

export const StarDiv = styled.div`
    display: flex;
    gap: 10px;
    font-size:28px;
    margin-bottom: 1rem;
    color: #ffb800f5;
`

export const TestimonialHeader = styled.div`
    ${MainHeading}
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2.5rem;
    /*width:100%;
    line-height:140%;
    margin-top: 0 !important;
    font-size: 3.5rem;
    margin-bottom: 2.5rem;
    font-family: "Grifter-bold", sans-serif;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 33px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
    font-size: 25px;
    }*/
`;

export const Arrow = styled.div`
  display: flex;
  gap: 50px;
  font-size: xxx-large;
  & > * {
    cursor: pointer;
  }
`;

export const ArrowDiv = styled.div`
display: flex;
gap: 50px;
font-size: xxx-large;
& > * {
  cursor: pointer;
}
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      display:none;
  }
`

export const MobileArrowDiv = styled.div`
  display: none;
  gap: 50px;
  font-size: xx-large;
  & > * {
    cursor: pointer;
  }
  @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
      display:flex;
  }
`

export const Review = styled.p`
  flex:1;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 2rem;
  line-height:180%;
  font-family: 'Plus Jakarta Sans', sans-serif;
  @media screen and (max-width: 980px) {
   width:90%;
  }
  @media screen and (max-width: 780px) {
    font-size:20px;
  }
  @media screen and (max-width: 580px) {
    font-size:20px;
  }
  @media screen and (max-width: 480px) {
    width:100%;
    font-size:20px;
  }
  @media screen and (max-width: 320px) {
    font-size:18px;
  }
`;

export const ReviewerDetails = styled.div`
  display: flex;
  gap: 20px;
  @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
    flex-direction: column;
  }
`
export const Avatar = styled.img`
  width: 80px !important;
  height: auto;
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
  @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
    height: 80px;
  }
`
export const Reviewer = styled.h3`
    font-weight:700;
    font-size:25px;
    color:#fff2f2;
    letter-spacing:0.5px;
    // opacity:0.8;
    margin-bottom: 15px;
    @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
      font-size: 20px;
    };
    @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
      font-size: 20px; 
    }
`;

export const ReviewerPosition = styled.small`
    font-size: 18px;
    @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
      font-size: 17px;
    };
    @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
      font-size: 16px; 
    }
`