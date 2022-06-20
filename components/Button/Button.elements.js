import styled from 'styled-components'


export const ButtonStyled = styled.button`
	box-sizing: border-box;
	display: inline-block;
	text-align: center;
	padding: ${(props) => props.theme.space[3]} ${(props) => props.theme.space[4]};
	color: ${(props) => props.theme.colors.background};
	background-color: ${(props) => props.theme.colors.primary};
	border: 1px solid;
	border-color: ${(props) => props.theme.colors.primary};
	border-radius: ${(props) => props.theme.radii.round};
	font-size: ${(props) => props.theme.fontSizes.m};
	text-decoration: none;
	&:hover:not(:disabled),
	&:active:not(:disabled),
	&:focus {
		outline: 0;
		color: ${(props) => props.theme.colors.background};
		border-color: ${(props) => props.theme.colors.accent};
		background-color: ${(props) => props.theme.colors.accent};
		cursor: pointer;
	}
	&:disabled {
		opacity: 0.6;
		filter: saturate(60%);
	}
`;
