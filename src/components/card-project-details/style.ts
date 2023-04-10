import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	height: fit-content;
	padding: 20px 25px 24px;
	background-color: ${({ theme }) => theme.palette.colors.BLUE};
`

export const WrapTitle = styled('div')`
	width: fit-content;
	margin-bottom: 12px;
	padding-bottom: 18px;
	border-bottom: 3px solid ${({ theme }) => theme.palette.colors.GREEN};
`
