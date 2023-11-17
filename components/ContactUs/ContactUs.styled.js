import styled from "styled-components";
import { motion } from "framer-motion";
import { MainHeading, flexColumn, flexRow } from "../cssHelper";
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';
import { AiOutlineLike } from "react-icons/ai";


export const Section = styled.section`
  width: 100vw;
  height: 100%;
  max-width: 100%;
  
`;
export const Container = styled.div`
  height: 100%;
  width: 90%;
  max-width:1600px;
  overflow-x:hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin:5rem auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      margin: 2.5rem auto;
    }
`;
export const LeftSection = styled.div`
  width: 50%;
  height: 90%;
  /* max-height:90%; */
  ${flexColumn}
  @media(max-width:1250px){
    width: 70%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
     width: 50%;
  }
  @media (max-width: 768px) {
    width:100%;
  }
`;
export const RightSection = styled.div`
  max-width: 100%;
 padding:4rem;
 border-radius: 20px;
  height: 100%;
  background: white;
  /* max-height:90%; */
  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    width: 70%;
    padding:2rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    max-width:100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    padding:1.5rem;
  }
`;

export const HeroForm = styled(motion.div)`
  max-width: 100%;
 padding:3rem;
 border-radius: 20px;
  height: 100%;
  background: white;
  /* max-height:90%; */
  @media(max-width: ${({ theme }) => theme.breakpoints.tablet}){
    width: 100%;
    padding: 5rem 4rem;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    padding:3rem;
    max-width:100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.smallestMobile}) {
    padding:2rem;
  }
  
`

export const TitleContact = styled.h2`
  ${MainHeading}
  width: 70%;
  margin-bottom: 4rem;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
  /*font-size: 3.5rem;
  ${flexColumn}
  width: 70%;
  margin-bottom:5rem;
  font-family: "Grifter-bold", sans-serif;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    font-size: 40px;
  }*/
`;
// export const Span = styled.span`
// font-size:${({theme})=>theme.fontSizes?.xxxs};
// transform:rotate(-18deg);
// position: absolute;
// top:0;
// margin-left:-25px;
// margin-top: -20px;

// `;
export const Contact = styled.div`
  ${flexRow}
  align-items: center;
  border-top: 1px solid #0D0A19;;
  line-height:150%;
  width: 95%;
  gap: 20px;
  padding: 60px 10px;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    padding: 30px 10px;
    ${flexColumn}
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    justify-content: space-evenly;
    width: 100%;
  }
`;

export const ContactDetails = styled.div`
  @media screen and (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
export const Detail = styled.div`
  user-select: text;
  flex:1;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-left: 0;
    text-align: center;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
  }
`;
export const DetailTitle = styled.h4`
  font-size: 19px;
  font-weight: 500;
  margin-bottom: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 20px;
  }
`;
export const DetailIcons = styled.div`
  width: 50px;
  height: 50px;
  background: #fec9c1;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    height: 60px;
    width: 60px;
  }
`;

export const MailIcon = styled(HiOutlineMail)`
  font-size: 25px;
  opacity: 0.7;
  color: #0D0A19;;
`;
export const PhoneIcon = styled(BsTelephone)`
  font-size: 25px;
  opacity: 0.7;
  color: #0D0A19;;
`;
export const SocialIcon = styled(AiOutlineLike)`
  font-size: 25px;
  opacity: 0.7;
  color: #0D0A19;;
`;

export const SocialDiv = styled.div`
  display:flex;
  width:100%;
  gap:20px;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

export const DetailDescription = styled.p`
  font-size: 25px;
  user-select:text;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoints.smallTablet}) {
    font-size: 22px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    font-size: 23px;
  }
`;
export const ContactLinkImage = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  object-position:center;
`;
export const Title = styled.h1`

`;
export const Form = styled.form`
height: 100%;
width:100%;
display:flex;
flex-direction:column;
`;

export const ContactForm = styled.div`
font-size:22px;
font-weight:600;
letter-spacing:1.5;
color:#0D0A19;;
line-height:260%;

@media (max-width: 768px) {
  font-size: 18px;
  line-height:200%;
}


`;

export const NameInput = styled.input`
/* width:300px; */
height:40px;
min-width:100%;
border:none;
border-bottom:2px solid #0D0A19;; 
color: #0D0A19;;
outline:none;
margin-bottom: 40px;
font-size:22px;
background-color: transparent;
&::placeholder {
  opacity:0.8;
  
}
@media (max-width: 768px) {
  font-size: 18px;
  line-height: 35px;
  width: 175px;
  height: 20px;
  border: none;
  border-bottom: 1px solid #0D0A19;;
}
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    margin-bottom: 30px;
  }
`;

export const EmailInput = styled.input`
/* width:550px; */
min-width:100%;
height:40px;
border:none;
border-bottom:2px solid #0D0A19;; 
color:#0D0A19;;
outline:none;
font-size:22px;
background-color: transparent;
margin-bottom: 40px;
@media (max-width: 768px) {
  font-size: 18px;
  line-height: 35px;
  width: 250px;
    height: 20px;
    border: none;
    border-bottom: 1px solid #0D0A19;;
}
@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  margin-bottom: 30px;
}
`;

export const PhoneInput = styled.input`
/* width:550px; */
min-width:100%;
height:40px;
border:none;
border-bottom:2px solid #0D0A19;; 
color:#0D0A19;;
outline:none;
font-size:22px;
margin-bottom: 40px;
background-color: transparent;
@media (max-width: 768px) {
  font-size: 18px;
  line-height: 35px;
  width: 250px;
    height: 20px;
    border: none;
    border-bottom: 1px solid #0D0A19;;
}
@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  margin-bottom: 30px;
}
`

export const Dropdowns = styled.select`
/* width:300px; */
min-width:100%;
height:40px;
border:none;
background-color:#fff2f2;
border-bottom:2px solid #0D0A19;; 
color:#0D0A19;;
outline:none;
font-size:22px;
background-color: transparent;
margin-bottom: 40px;
@media (max-width: 768px) {
  font-size: 18px;
  line-height: 35px;
  width: 150px;
  height: 20px;
  border-bottom: 1px solid #0D0A19;;
  background-color: transparent;
}
@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
  margin-bottom: 30px;
}
`;
// export const ServiceInput = styled.input`
// width:300px;
// height:40px;
// border:none;
// border-bottom:2px solid #0D0A19;; 
// color:#0D0A19;;
// outline:none;
// font-size:32px;
// `;
export const GetaQuote = styled.h2`
font-size:27px;
font-weight:700;
text-align: center;

color: #0D0A19;;
`;

export const ScheduleP = styled.p`
font-size:35px;
font-weight:bold;
margin:0 0 50px 0;
`;
export const TermsCheckbox = styled.div`
// display:flex;
margin:30px 0 10px 0;

`;
export const SubmitForm = styled.button`
padding:16px 36px;
cursor:pointer;
font-weight:500;
font-size:18px;
letter-spacing:0.8px;
border-radius: 5px;
margin:30px 0 0 0;
background-color:#0D0A19;;
color:#fff;
@media (max-width:767px){
    padding: 12px 25px;
    font-size: 14px;
}

`;
export const CheckboxTitle = styled.p`
font-size:16px;
margin-left:15px;
letter-spacing:0.8;
font-weight:400;
opacity:0.8;
@media (max-width: 768px) {
  font-size: 14px;
  
}

`;
export const Checkbox = styled.input`
width:25px;
height:18px;
background:transparent ;
border-radius:5px;
outline:none;
cursor:pointer;
`;
export const UpperSection = styled.div`

`;
export const BottomSection = styled.div`
display: flex;
align-items: center;
gap:6rem;
@media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    gap:2rem;
}
@media(max-width:768px){
  flex-direction: column;
}
`;

