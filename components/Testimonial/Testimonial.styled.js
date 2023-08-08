import styled, { css } from 'styled-components'
import { flexColumnCenter, flexRowCenter } from '../cssHelper';
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
      padding: 60px 25px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
      padding: 40px 25px;
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
    padding:25px 50px 10px 50px;
    margin-bottom: 40px;
    border-radius: 15px;
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: space-between;
    @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
      height: auto;
      padding:25px 22px 20px 0px;
   
    }
 `;

export const StarDiv = styled.div`
    display: flex;
    gap: 10px;
    font-size:28px;
    margin-bottom: 1rem;
    color: #ffb800f5;
`

export const TestimonialHeader = styled.div`
    width:100%;
    line-height:140%;
    margin-top: 0 !important;
    font-size: 60px;
    margin-bottom: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "Grifter-bold", sans-serif;

    @media(max-width: ${({ theme }) => theme.breakpoints.mobile}){
    font-size: 33px;
    }
    @media(max-width: ${({ theme }) => theme.breakpoints.smallestMobile}){
    font-size: 25px;
    }
`;

export const ArrowDiv = styled.div`
  display: flex;
  gap: 50px;
  font-size: xxx-large;
  & > * {
    cursor: pointer;
  }
`

export const Review = styled.p`
  flex:1;
  font-size: 22px;
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
    font-size:32px;
    letter-spacing:0.5px;
    opacity:0.8;
    margin-bottom: 15px;
`;

export const ReviewerPosition = styled.small`
    font-size: 18px;
`