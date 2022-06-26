import styled from 'styled-components'


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

export const FeaturesContainer = styled.div`

`

export const FeaturesMainHeadline = styled.h2`

`

export const FeaturesWrapper = styled.div`

`
export const FeaturesLeftSection =styled.div``

export const FeaturesLeftSubHeadText = styled.h5`

`
export const FeaturesLeftPrimaryImage = styled.img``

export const FeaturesLeftSecondaryImage = styled.img``

export const FeaturesRightSection =styled.div``

export const FeaturesRightPrimaryTextWrapper = styled.div``

export const FeaturesRightHeadline = styled.h3``

export const FeaturesRightParagraph = styled.p``

export const FeaturesRightSecondaryTextWrapper = styled.div``

export const FeaturesRightLi = styled.li``

export const FeaturesRightDiv = styled.div``

export const FeaturesRightH4 = styled.h4``

export const FeaturesRightP = styled.p``