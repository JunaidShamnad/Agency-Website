import styled from "styled-components";
import {HeadingH2} from '../cssHelper'



export const Container = styled.div`
 height:100vh;
 width:100vw;
 display:flex;
background:${({ theme }) => theme.colors.primaryBackground};
`;

export const Heading = styled.h2`
${HeadingH2}
`
