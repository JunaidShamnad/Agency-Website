import { css } from "styled-components";

export const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const gridCenter = css`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const MainHeading = css`
  font-size: ${({ theme }) => theme.fontSizes?.xxxl};
  font-weight: ${({ theme }) => theme.fontWeights?.black};
  line-height: ${({ theme }) => theme.fontSizes?.xxxxl};
  letter-spacing: 1px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxl};
    line-height: ${({ theme }) => theme.fontSizes?.xxxl};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xl};
    line-height: ${({ theme }) => theme.fontSizes?.xxl};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.l};
    line-height: ${({ theme }) => theme.fontSizes?.xl};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.m};
    line-height: ${({ theme }) => theme.fontSizes?.l};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
    line-height: ${({ theme }) => theme.fontSizes?.m};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.extraSmallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xs};
    line-height: ${({ theme }) => theme.fontSizes?.s};
  }
`;

export const HeadingH2 = css`
  font-size: ${({ theme }) => theme.fontSizes?.xxl};
  font-weight: ${({ theme }) => theme.fontWeights?.bolder};
  line-height: ${({ theme }) => theme.fontSizes?.xxxl};
  letter-spacing: 0.9px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xl};
    line-height: ${({ theme }) => theme.fontSizes?.xxl};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.l};
    line-height: ${({ theme }) => theme.fontSizes?.xl};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.m};
    line-height: ${({ theme }) => theme.fontSizes?.l};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
    line-height: ${({ theme }) => theme.fontSizes?.m};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xs};
    line-height: ${({ theme }) => theme.fontSizes?.s};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.extraSmallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
    line-height: ${({ theme }) => theme.fontSizes?.xs};
  }
`;

export const HeadingH3 = css`
  font-size: ${({ theme }) => theme.fontSizes?.xl};
  font-weight: ${({ theme }) => theme.fontWeights?.bold};
  line-height: ${({ theme }) => theme.fontSizes?.xxl};
  letter-spacing: 0.8px;
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.l};
    line-height: ${({ theme }) => theme.fontSizes?.xl};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.m};
    line-height: ${({ theme }) => theme.fontSizes?.l};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
    line-height: ${({ theme }) => theme.fontSizes?.m};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xs};
    line-height: ${({ theme }) => theme.fontSizes?.s};
  }
  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
    line-height: ${({ theme }) => theme.fontSizes?.xs};
  }
`;

export const Paragraph = css`
  font-size: ${({ theme }) => theme.fontSizes?.xxxs};
  font-weight: ${({ theme }) => theme.fontWeights?.regular};
  line-height: ${({ theme }) => theme.fontSizes?.xxs};
  transition: all 0.2s ease-in-out;

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxxs};
    line-height: ${({ theme }) => theme.fontSizes?.xxxs};
  }

  @media screen and (max-width: ${({ theme }) =>
      theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxxxs};
    line-height: ${({ theme }) => theme.fontSizes?.xxxxs};
  }
`;
