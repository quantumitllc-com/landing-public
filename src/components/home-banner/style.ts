import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding: 55px 0;
	position: relative;
	align-items: center;
	flex-direction: column;
`

export const WrapButton = styled('div')`
	margin-top: 55px;
	position: relative;
	.icon-spread {
		top: -20px;
		right: 100%;
		position: absolute;
	}
`

export const WrapText = styled('div')`
	padding: 20px 0 36px;
`

export const WrapLaptop = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	svg {
		width: 95%;
		height: 95%;
		max-width: ${({ theme }) => theme.breakpoints.values.md}px;
	}
`

export const WrapBackground = styled('div')`
	top: 0;
	left: 0;
	right: 0;
	height: 1400px;
	z-index: -1;
	position: absolute;
	svg {
		width: 100%;
		height: 100%;
	}
`
