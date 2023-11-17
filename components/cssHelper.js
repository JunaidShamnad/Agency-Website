import { css } from "styled-components";

export const flexRowCenter = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const flexRow = css`
  display: flex;
  flex-direction: row;
`;
export const divCenter = css`
margin-left:auto;
margin-right:auto;
`
export const flexColumn = css`
  display: flex;
  flex-direction: Column;
`;
export const flexColumnCenter = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const gridTwo = css`
display:grid;
grid-template-columns: auto auto;
`
export const gridCenter = css`
  display: grid;
  justify-content: center;
  align-items: center;
`;

export const MainHeading = css`
  /*font-size: ${({ theme }) => theme.fontSizes?.xxxl};
  font-family: 'Poppins', sans-serif;
  font-weight: ${({ theme }) => theme.fontWeights?.black};
  line-height: ${({ theme }) => theme.fontSizes?.xxxxl};
  letter-spacing: 1px;
  transition: ${({ theme }) => theme.transition?.base};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxl};
    line-height: ${({ theme }) => theme.fontSizes?.xxxl};
  }
  @media screen and (max-width: ${({ theme }) =>theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xl};
    line-height: ${({ theme }) => theme.fontSizes?.xxl};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.l};
    line-height: ${({ theme }) => theme.fontSizes?.xl};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.m};
    line-height: ${({ theme }) => theme.fontSizes?.l};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
    line-height: ${({ theme }) => theme.fontSizes?.m};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.extraSmallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xs};
    line-height: ${({ theme }) => theme.fontSizes?.s};
  }*/
  font-size: 3.5rem;
  font-family: "Grifter-bold", sans-serif;
  @media (max-width: 1031px) {
    font-size: 3rem;
  };
  @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    font-size: 2.5rem;
  };
  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    font-size: 1.9rem;
  };
`;

export const HeadingH2 = css`
  font-size: ${({ theme }) => theme.fontSizes?.xxl};
  font-weight: ${({ theme }) => theme.fontWeights?.bolder};
  line-height: ${({ theme }) => theme.fontSizes?.xxxl};
  letter-spacing: 0.9px;
  transition: ${({ theme }) => theme.transition?.base};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xl};
    line-height: ${({ theme }) => theme.fontSizes?.xxl};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.l};
    line-height: ${({ theme }) => theme.fontSizes?.xl};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.m};
    line-height: ${({ theme }) => theme.fontSizes?.l};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
    line-height: ${({ theme }) => theme.fontSizes?.m};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xs};
    line-height: ${({ theme }) => theme.fontSizes?.s};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.extraSmallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
    line-height: ${({ theme }) => theme.fontSizes?.xs};
  }
`;

export const HeadingH3 = css`
  font-size: ${({ theme }) => theme.fontSizes?.xl};

  font-weight: ${({ theme }) => theme.fontWeights?.bold};
  line-height: ${({ theme }) => theme.fontSizes?.xxl};
  letter-spacing: 0.8px;
  transition: ${({ theme }) => theme.transition?.base};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.l};
    line-height: ${({ theme }) => theme.fontSizes?.xl};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.m};
    line-height: ${({ theme }) => theme.fontSizes?.l};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
    line-height: ${({ theme }) => theme.fontSizes?.m};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xs};
    line-height: ${({ theme }) => theme.fontSizes?.s};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
    letter-spacing:1px;
    line-height: 140%;
  }
`;

export const Paragraph = css`
  font-size: ${({ theme }) => theme.fontSizes?.xxxs};
  font-weight: ${({ theme }) => theme.fontWeights?.regular};
  line-height: ${({ theme }) => theme.fontSizes?.xxs};
  transition: ${({ theme }) => theme.transition?.base};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxs};
    line-height: ${({ theme }) => theme.fontSizes?.xxxs};
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxxs};
    line-height: ${({ theme }) => theme.fontSizes?.xxxxs};
  }
`;

export const PrimaryButton = css`
  box-sizing: ${({ theme }) => theme.buttons.primary?.boxSizing};
  display: ${({ theme }) => theme.buttons.primary?.display};
  text-align: ${({ theme }) => theme.buttons.primary?.textAlign};
  padding: ${({ theme }) => theme.buttons.primary?.padding};
  color: ${({ theme }) => theme.buttons.primary?.color};
  width: ${({ theme }) => theme.buttons.primary?.width};
  background-color: ${({ theme }) => theme.buttons.primary?.backgroundColor};
  border: ${({ theme }) => theme.buttons.primary?.border};
  border-color: ${({ theme }) => theme.buttons.primary?.borderColor};
  border-radius: ${({ theme }) => theme.buttons.primary?.borderRadius};
  font-size: ${({ theme }) => theme.buttons.primary?.fontSize};
  font-weight: ${({ theme }) => theme.buttons.primary?.fontWeight};
  letter-spacing: ${({ theme }) => theme.buttons.primary?.letterSpacing};
  text-decoration: ${({ theme }) => theme.buttons.primary?.textDecoration};
  cursor: ${({ theme }) => theme.buttons.primary?.cursor};
  transition: ${({ theme }) => theme.buttons.primary?.transition};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: ${({ theme }) =>
      theme.buttons.primary?.mediaQuery.tablet.fontSize};
    /*padding: ${({ theme }) => theme.buttons.primary?.mediaQuery.tablet.padding};*/
    font-weight: ${({ theme }) =>
      theme.buttons.primary?.mediaQuery.tablet.fontWeight};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.extraSmallMobile}) {
    font-size: ${({ theme }) =>
      theme.buttons.primary?.mediaQuery.mobile.fontSize};
    /*padding: ${({ theme }) => theme.buttons.primary?.mediaQuery.mobile.padding};*/
    font-weight: ${({ theme }) =>
      theme.buttons.primary?.mediaQuery.mobile.fontWeight};
  }
`;

export const SecondaryButton = css`
  box-sizing: ${({ theme }) => theme.buttons.secondary?.boxSizing};
  display: ${({ theme }) => theme.buttons.secondary?.display};
  text-align: ${({ theme }) => theme.buttons.secondary?.textAlign};
  padding: ${({ theme }) => theme.buttons.secondary?.padding};
  color: ${({ theme }) => theme.buttons.secondary?.color};
  background-color: ${({ theme }) => theme.buttons.secondary?.backgroundColor};
  border: ${({ theme }) => theme.buttons.secondary?.border};
  border-color: ${({ theme }) => theme.buttons.secondary?.borderColor};
  border-radius: ${({ theme }) => theme.buttons.secondary?.borderRadius};
  font-size: ${({ theme }) => theme.buttons.secondary?.fontSize};
  font-weight: ${({ theme }) => theme.buttons.secondary?.fontWeight};
  letter-spacing: ${({ theme }) => theme.buttons.secondary?.letterSpacing};
  text-decoration: ${({ theme }) => theme.buttons.secondary?.textDecoration};
  cursor: ${({ theme }) => theme.buttons.secondary?.cursor};
  transition: ${({ theme }) => theme.buttons.secondary?.transition};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: ${({ theme }) =>
      theme.buttons.secondary?.mediaQuery.tablet.fontSize};
    padding: ${({ theme }) =>
      theme.buttons.secondary?.mediaQuery.tablet.padding};
    font-weight: ${({ theme }) =>
      theme.buttons.secondary?.mediaQuery.tablet.fontWeight};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.extraSmallMobile}) {
    font-size: ${({ theme }) =>
      theme.buttons.secondary?.mediaQuery.mobile.fontSize};
    padding: ${({ theme }) =>
      theme.buttons.secondary?.mediaQuery.mobile.padding};
    font-weight: ${({ theme }) =>
      theme.buttons.secondary?.mediaQuery.mobile.fontWeight};
  }
`;

export const TeritaryButton = css`
  box-sizing: ${({ theme }) => theme.buttons.teritary?.boxSizing};
  display: ${({ theme }) => theme.buttons.teritary?.display};
  text-align: ${({ theme }) => theme.buttons.teritary?.textAlign};
  padding: ${({ theme }) => theme.buttons.teritary?.padding};
  color: ${({ theme }) => theme.buttons.teritary?.color};
  background-color: ${({ theme }) => theme.buttons.teritary?.backgroundColor};
  border: ${({ theme }) => theme.buttons.teritary?.border};
  border-color: ${({ theme }) => theme.buttons.teritary?.borderColor};
  border-radius: ${({ theme }) => theme.buttons.teritary?.borderRadius};
  font-size: ${({ theme }) => theme.buttons.teritary?.fontSize};
  font-weight: ${({ theme }) => theme.buttons.teritary?.fontWeight};
  letter-spacing: ${({ theme }) => theme.buttons.teritary?.letterSpacing};
  text-decoration: ${({ theme }) => theme.buttons.teritary?.textDecoration};
  cursor: ${({ theme }) => theme.buttons.teritary?.cursor};
  transition: ${({ theme }) => theme.buttons.teritary?.transition};

  @media screen and (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: ${({ theme }) =>
      theme.buttons.teritary?.mediaQuery.tablet.fontSize};
    padding: ${({ theme }) =>
      theme.buttons.teritary?.mediaQuery.tablet.padding};
    font-weight: ${({ theme }) =>
      theme.buttons.teritary?.mediaQuery.tablet.fontWeight};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.extraSmallMobile}) {
    font-size: ${({ theme }) =>
      theme.buttons.teritary?.mediaQuery.mobile.fontSize};
    padding: ${({ theme }) =>
      theme.buttons.teritary?.mediaQuery.mobile.padding};
    font-weight: ${({ theme }) =>
      theme.buttons.teritary?.mediaQuery.mobile.fontWeight};
  }
`;

export const QuaternaryButton = css`
  box-sizing: ${({ theme }) => theme.buttons.quaternary?.boxSizing};
  display: ${({ theme }) => theme.buttons.quaternary?.display};
  text-align: ${({ theme }) => theme.buttons.quaternary?.textAlign};
  padding: ${({ theme }) => theme.buttons.quaternary?.padding};
  color: ${({ theme }) => theme.buttons.quaternary?.color};
  background-color: ${({ theme }) => theme.buttons.quaternary?.backgroundColor};
  border: ${({ theme }) => theme.buttons.quaternary?.border};
  border-color: ${({ theme }) => theme.buttons.quaternary?.borderColor};
  border-radius: ${({ theme }) => theme.buttons.quaternary?.borderRadius};
  font-size: ${({ theme }) => theme.buttons.quaternary?.fontSize};
  font-weight: ${({ theme }) => theme.buttons.quaternary?.fontWeight};
  letter-spacing: ${({ theme }) => theme.buttons.quaternary?.letterSpacing};
  text-decoration: ${({ theme }) => theme.buttons.quaternary?.textDecoration};
  cursor: ${({ theme }) => theme.buttons.quaternary?.cursor};
  transition: ${({ theme }) => theme.buttons.quaternary?.transition};
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.smallMobile}) {
    font-size: ${({ theme }) =>
      theme.buttons.quaternary?.mediaQuery.tablet.fontSize};
    padding: ${({ theme }) =>
      theme.buttons.quaternary?.mediaQuery.tablet.padding};
    font-weight: ${({ theme }) =>
      theme.buttons.quaternary?.mediaQuery.tablet.fontWeight};
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.extraSmallMobile}) {
    font-size: ${({ theme }) =>
      theme.buttons.quaternary?.mediaQuery.mobile.fontSize};
    padding: ${({ theme }) =>
      theme.buttons.quaternary?.mediaQuery.mobile.padding};
    font-weight: ${({ theme }) =>
      theme.buttons.quaternary?.mediaQuery.mobile.fontWeight};
  }
`;
