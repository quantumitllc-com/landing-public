import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	display: flex;
	height: fit-content;
	flex-direction: column;

	.Muifilledinput-underline::before {
		border: none !important;
	}
	.Muiinputbase-root .Muifilledinput-root::before {
		border: none !important;
	}
`
