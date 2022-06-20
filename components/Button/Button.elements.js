import styled from 'styled-components'


export const ButtonStyled = styled.button`
	box-sizing: border-box;
	display: inline-block;
	text-align: center;
	padding: ${(props) => props.theme.buttons.primary?.padding};
	color: ${(props) => props.theme.buttons.primary?.color};
	background-color: ${(props) => props.theme.buttons.primary?.backgroundColor};
	border: ${({ theme }) => theme.buttons.primary?.border};
	border-color: ${(props) => props.theme.buttons.primary?.borderColor};
	border-radius: ${(props) => props.theme.buttons.primary?.borderRadius};
	font-size: ${(props) => props.theme.buttons.primary?.fontSize};
	font-weight:${({theme})=>theme.buttons.primary?.fontWeight};
	letter-spacing: ${(props) => props.theme.buttons.primary?.letterSpacing};
	text-decoration: ${({ theme }) => theme.buttons.primary?.textDecoration};
`;
