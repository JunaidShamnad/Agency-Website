import styled from "styled-components";
import { GrPrevious, GrNext } from "react-icons/gr";
import {motion} from 'framer-motion'
export const Section = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 100%;
  background-color: #fff2f2;
`;

export const Container = styled.div`
  height: 100%;
  width: 90%;
  max-width: 1600px;
  overflow-x:hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding-top: 2rem;
  padding-bottom: 1rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    padding-top: 0.9rem;
    padding-bottom: 0.9rem;
  } ;
`;

export const SliderContainer = styled(motion.div)`
  user-select: none;
  width: 100%;
  height: 100%;
  margin: 5rem auto;
`;

export const Slider = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
 grid-gap:1rem;
 max-width:100%;
  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
    grid-gap:5rem;
  }
`;

export const SliderLeft = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  @media screen and (max-width: 980px) {
   align-items:center;
  }
`;

export const SliderTitle = styled.h2`
  text-transform: uppercase;
  font-size: 18px;
  font-weight:400;
  letter-spacing: 0.8px;
`;

export const SliderContent = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin:5rem 0;
`;

export const SliderReview = styled.p`
  font-size: 30px;
  font-weight: 500;
  margin-bottom: 2rem;
  line-height:140%;
  width: 60%;

  @media screen and (max-width: 980px) {
   width:90%;
  }
  @media screen and (max-width: 780px) {
    font-size:26px;
  }
  @media screen and (max-width: 580px) {
    font-size:24px;
  }
  @media screen and (max-width: 480px) {
    font-size:22px;
  }
  @media screen and (max-width: 320px) {
    font-size:20px;
  }
`;

export const SliderReviewer = styled.h3`
font-weight:400;
font-size:16px;
letter-spacing:0.5px;
opacity:0.8;
`;

export const SliderRight = styled(motion.div)`
display:flex;
max-width:100%;
`;

export const SliderImage = styled.img`
  object-fit: cover;
  object-position: center;
  image-rendering: crisp-edges;
    width: 100%;
    height:100%;
`;

export const SliderIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top:1rem;
`;

export const PrevArrow = styled(GrPrevious)`
  cursor: pointer;
  margin-right: 2rem;
`;

export const NextArrow = styled(GrNext)`
  cursor: pointer;
`;
