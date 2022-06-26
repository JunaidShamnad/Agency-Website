import styled from "styled-components";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";

import {
  HeadingH2,
  HeadingH3,
  flexColumn,

  flexColumnCenter,
} from "../cssHelper";


export const Section = styled.section`
width: 100vw;
    height: 100%;
    max-width:100%;
`;

export const Container = styled.div`
  height: 100%;
  width: 90%;
  max-width:1600px;
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

export const ServiceContent = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 2rem;
  width: 100%;
  margin-top: 150px;
  margin-bottom: 150px;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 30% 1fr;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    grid-template-columns: 1fr;
    grid-template-rows: 30% 1fr;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 22% 1fr;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 17% 1fr;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 20% 1fr;

  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.extraSmallMobile}) {
    grid-template-columns: 1fr;
    grid-template-rows: 30% 1fr;

  }

`;

export const ServiceDetails = styled.div`
  width: 100%;
  height: auto;
`;

export const ServicesText = styled.div`
  ${flexColumn};

  width: 100%;
  margin-bottom: 150px;
`;
export const ServiceHeading = styled.h3`
  ${HeadingH2};
  width: ${({ theme }) => theme.width[10]};
  line-height: 140%;
  text-align: left;
  margin-bottom: 0.1rem;
  color: #1d1a26;
  margin-bottom: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin: 5px 0;
    font-size:65px;
    line-height:5rem;
  }
`;

export const ServiceDescription = styled.p`
  font-size: ${({ theme }) => theme.fontSizes?.xxs};
  font-weight: normal;
  width: 85%;
  line-height: 150%;
  letter-spacing: 0.3px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxs};
  }
`;
export const HorizontalLine = styled.span`
  font-size: 35px;
  margin-right: 15px;
`;

// export const ServiceNavImage = styled.div`
//   ${flexRowCenter};
//   width: 100%;
//   margin-bottom: 150px;
//   @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
//     ${flexColumn}
//   }
// `;

export const ServiceList = styled.div`
  width: 100%;
  padding:0;
`;
export const Service = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  height: auto;
  border-top: 1px solid #000;
  padding-top: 3rem;
  padding-bottom: 2rem;
`;
export const ServiceIndex = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes?.xxs};

  @media screen and (max-width: ${({ theme }) =>theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxs};
  }
`;
export const ServiceTitle = styled.h2`
  ${HeadingH3};
  display: flex;
  font-size: ${({ theme }) => theme.fontSizes?.s};
  width: 90%;
  line-height: 120%;
  font-weight: 600;
  flex-direction: column;
  margin-bottom: 2rem;
`;
export const Span = styled.span`
  font-size: ${({ theme }) => theme.fontSizes?.xxxs};
`;
export const ServiceLink = styled.p`
  font-size: ${({ theme }) => theme.fontSizes?.xxxs};
  font-weight: 500;
  margin-top: 20px;
  @media screen and (max-width: ${({ theme }) =>theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxxs};
  }
`;
export const ServiceTextMainContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  width: 100%;
`;
export const ServiceLinkContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 100%;
`;

export const ArrowIcon = styled(BsFillArrowUpRightCircleFill)`
  color: #8873f0;
  font-size: 49px;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
  }
  @media screen and (max-width: ${({ theme }) =>theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xs};
  }

  @media screen and (max-width: ${({ theme }) =>theme.breakpoints?.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
  }
  @media screen and (max-width: ${({ theme }) =>theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
  }
`;
