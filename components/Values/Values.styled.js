import styled from 'styled-components'
import {Paragraph,SecondaryButton} from '../cssHelper'
import {FiSearch} from 'react-icons/fi'
import {AiOutlineFieldTime} from 'react-icons/ai'

// ======================= Section and Container *start=======================//
export const Section = styled.section`
   width: 100vw;
    height: 100%;
    max-width:100%;
    background-color: #5928e5;
    z-index:20;
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
// ======================= Section and Container *end=======================//

//==================Values Parent Wrapper===================
export const ValuesParentWrapper = styled.div`
 display:grid;
 grid-template-rows:1fr;
 grid-template-columns:0.8fr 1fr;
 width:100vw;
 max-width:100%;
 height:auto;

padding:2.1rem 0;
 @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
  grid-template-rows:0.4fr auto;
 grid-template-columns:1fr;
 grid-gap:4rem;
 padding:1rem 0;
 text-align:center;
 justify-content:center;
 align-items:center;
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    
   
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
   
    
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    
    
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    
   
  }
`
//=========================== Values Left Section *start==============================//
export const ValuesLeftSection = styled.div`
 display:grid;
 grid-template-rows:1fr 1.2fr;
place-items:center;
/* @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
  grid-template-rows:1fr;
 grid-template-columns:1fr;
  } */

`
export const ValuesLeftHeadline = styled.h2`
  font-size: 60px;
  color:#fff2f2;
  font-weight: ${({ theme }) => theme.fontWeights?.semibold};
  line-height: 120%;
  transition: ${({ theme }) => theme.transition?.base};
  margin-bottom:2.5rem;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.ms};
    
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: ${({ theme }) => theme.fontSizes?.ms};
   
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.mobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.s};
    
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xs};
    
  }
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: ${({ theme }) => theme.fontSizes?.xxs};
   
  }
`

export const ValuesLeftHeadlineItalic = styled.span`
 font-style: italic;
 display:block;
 color:#fff2f2;
`

export const ValuesLeftBottomWrapper = styled.div`
display:flex;
flex-direction:column;
justify-content:flex-end;
margin-top:1rem;
padding-bottom:2rem;
width:90%;
`

export const ValuesLeftParagraph = styled.p`
${Paragraph}
color:#fff2f2;
margin-bottom:2rem;
width:80%;
@media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
   width:100%;
   text-align:center;
   margin-bottom:1.8rem;
  }
`
export const ValuesLeftParagraphBold = styled.span`
 font-weight:bold;
 color:#fff2f2;
`

export const ValuesLeftInputContainer = styled.div`
display:flex;
align-items: center;
@media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
 justify-content: center;
  }
`

export const ValuesLeftInput = styled.input`
 padding: 13.5px;
 padding-left: 4px;
 background:transparent;
 outline:none;
 border:none;
 border-bottom:2px solid #fec9c1;
 text-align:left;
 color:#fff2f2;
 font-size:18px;
 font-weight:500;
 margin-right:0.5rem;
 width:50%;

 ::placeholder {
  color: #fff2f2;
  opacity:0.8;
}

`
export const ValuesLeftInputButton = styled.button`
${SecondaryButton}
outline:none;
border-radius:0px;
background-color:#fec9c1;
color:#0D0A19;;
padding:12px 25px;
/* text-transform:uppercase; */
`

//=========================== Values Left Section *end==============================//


//=========================== Values Right Section *start==============================//
export const ValuesRightSection = styled.div`
height:100%;
max-width:100%;
`

export const ValuesRightCardContainer = styled.div`
display:grid;
grid-template-columns:1fr 1fr;
grid-template-rows:1fr 1fr;
grid-gap:5px;
width:100%;
height:100%;
place-items:center;
@media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
    place-items:center;
   
  }

@media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallMobile}) {
  grid-template-columns:1fr;
  grid-template-rows:1fr 1fr 1fr 1fr;
  grid-gap:1.1rem;
  }
`
export const ValuesRightCard =styled.div`
width:100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items: center;
margin:2rem 1rem;
`

// export const ValuesRightTextContiner = styled.div``
export const ValuesRightIconContiner = styled.div`
width:100%;
display:flex;
justify-content:center;
align-items:center;
`

export const ValuesRightTextContiner = styled.div`
width:100%;
display:flex;
flex-direction:column;
justify-content:center;
letter-spacing:0.8;
align-items:center;`

export const ValuesRightCardTitle = styled.p`
 font-size:25px;
 letter-spacing:0.8;
 font-weight:600;
 /* font-family:'Poppins', sans-serif; */
 line-height:120%;
 margin-bottom:16px;
 color:#fff2f2;
  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallTablet}) {
    font-size: 20px;
    
  }

  @media screen and (max-width: ${({ theme }) => theme.breakpoints?.smallestMobile}) {
    font-size: 17px;
    
  }`

export const ValuesRightCardDescription = styled.p`
width:80%;
margin-bottom:5px;
line-height:150%;
text-align:center;
letter-spacing:0.8;
opacity:0.7;
color:#fff2f2;
@media screen and (max-width: ${({ theme }) => theme.breakpoints?.tablet}) {
   width:100%;
   text-align:center;
   margin-bottom:1.8rem;
  }
`
export const FirstIcon = styled(AiOutlineFieldTime)`
font-size:45px;
font-weight:300;
color:#fec9c1;
`
export const SecondIcon = styled(FiSearch)`
font-size:45px;
font-weight:300;
color:#fff2f2;
`

export const PerfectionImage = styled.img`
width:6rem;
height:auto;
object-fit:cover;
object-position:center;
`

export const DeadlineImage = styled.img`
width:6rem;
height:auto;
object-fit:cover;
object-position:center;
`
export const UpdatedeImage = styled.img`
width:6rem;
height:auto;
object-fit:cover;
object-position:center;
`
export const TransparentImage = styled.img`
width:6rem;
height:auto;
object-fit:cover;
object-position:center;
`

//=========================== Values Right Section *end==============================//