import styled from "styled-components";
import { HeadingH3,flexColumn,flexRow,flexColumnCenter } from "../cssHelper";
import {HiOutlineMail,HiOutlineLocationMarker} from 'react-icons/hi';
// import Dropdown from 'react-dropdown'; 
import { Dropdown } from 'semantic-ui-react'
export const Section = styled.section`
  width: 100vw;
  height: 100%;
  max-width: 100%;
`;
export const Container = styled.div`
  height: 100%;
  width: 90%;
  max-width:1600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin:5rem auto;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      flex-direction: column;
      margin: 1rem auto;
    }
`;
export const LeftSection = styled.div`
  width: 50%;
  height: 90%;
  /* max-height:90%; */
  ${flexColumn}
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
export const RightSection = styled.div`
  width: 50%;
  height: 90%;
  /* max-height:90%; */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
  }
`;
export const TitleContact = styled.h1`
  font-size: 64px;
  ${flexColumn}
  width: 50%;
  margin-bottom:25px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    width: 100%;
    font-size: 40px;
  }
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
  height:215px;
  align-items: center;
  border-top: 4px solid #000;
  width: 85%;
  justify-content: space-between;
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
  margin-left: 50px;
  width: 75%;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-left: 0;
    width: 50%;
  }
`;
export const DetailTitle = styled.h1`
  font-size: 19px;
  font-weight: normal;
  margin-bottom: 10px;
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
  color: #0d0a19;
`;
export const LocationIcon = styled(HiOutlineLocationMarker)`
  font-size: 25px;
  opacity: 0.7;
  color: #0d0a19;
`;
export const DetailDescription = styled.p`
  font-size: 25px;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    font-size: 15px;
    width: 100%;
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
`;

export const ContactForm = styled.p`
font-size:32px;
font-weight:600;
letter-spacing:1.5;
color:#000;
line-height:75px;


`;

export const NameInput = styled.input`
width:300px;
height:40px;
border:none;
border-bottom:2px solid #000; 
color: #000;
outline:none;
font-size:32px;
`;

export const EmailInput = styled.input`
width:550px;
height:40px;
border:none;
border-bottom:2px solid #000; 
color:#000;
outline:none;
font-size:32px;
`;

export const Dropdowns = styled.input`
width:300px;
height:40px;
border:none;
border-bottom:2px solid #000; 
color:#000;
outline:none;
font-size:32px;
`;
// export const ServiceInput = styled.input`
// width:300px;
// height:40px;
// border:none;
// border-bottom:2px solid #000; 
// color:#000;
// outline:none;
// font-size:32px;
// `;
export const GetaQuote = styled.h1`
font-size:22px;
color: #000;
margin:30px 0 15px 0px;
`;

export const ScheduleP = styled.p`
font-size:35px;
font-weight:bold;
margin:0 0 50px 0;
`;
export const TermsCheckbox = styled.div`
display:flex;
margin:30px 0 10px 0;

`;
export const SubmitForm = styled.button`
padding:15px 35px;
font-weight:500;
font-size:15px;
border-radius: 5px;
margin:20px 0 50px 0;
background-color:#000;
color:#fff;

`;
export const CheckboxTitle = styled.h1`
font-size:22px;
margin-left:15px;


`;
export const Checkbox = styled.input`

`;
export const UpperSection = styled.div`

`;
export const BottomSection = styled.div`
display: flex;
align-items: center;
@media(max-width:768px){
  flex-direction: column;
}
`;

