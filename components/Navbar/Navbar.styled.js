import styled from "styled-components";
import { QuaternaryButton, flexRow } from "../cssHelper";

export const Nav = styled.div`
  ${flexRow}
  width:100%;
  max-width:100vw;
  padding: 1rem 2.5rem;
  align-items: center;
  margin-bottom: 25px;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 999;
  /* box-shadow:"0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)"; */
  /* background-color:transparent; */
  background-color: #fff7f0;
`;
export const Logo = styled.div`
  width: 35%;
`;
export const Menu = styled.ul`
  ${flexRow}
  width: 40%;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    display: none;
  } ;
`;
export const Li = styled.li`
  list-style-type: none;
`;
export const Button = styled.button`
  ${QuaternaryButton}
`;
