import styled from "styled-components";
import { HeadingH3,flexRow,flexColumn } from "../cssHelper";

export const Heading = styled.h1`
  ${HeadingH3};
`;

export const Container = styled.div`
  height: 100%;
  ${flexRow}
  width:90%;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;

export const WorkOne = styled.div`
${flexColumn};
justify-content: space-between;
`
export const WorkTitle = styled.h1`
width:60%;
margin-bottom: 10px;
`
export const Work = styled.div`
border-top:1px solid #000;
padding-top: 20px;
`;

export const WorkTwo = styled.div`
${flexColumn}
height: 750px;
justify-content: center;
`;

export const WorkThree = styled.div``;
export const WorkDescription = styled.p`
font-size:15px;
margin-bottom:25px;
`
export const WorkHeading = styled.h1`
font-size: 64px;
width: 50%;
margin-bottom:50px;
`;
export const WorkLinkImage = styled.img``;
export const WorkImage = styled.img`
width:515px;
height:390px;
object-fit: cover;
`;
