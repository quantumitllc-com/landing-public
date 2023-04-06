import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	padding: 25px;
	cursor: pointer;
	background: #ffffff;
	border-radius: 12px;
	border: 1px solid rgba(0, 0, 0, 0.07);
	box-shadow: 0px 0px 100px rgba(15, 54, 78, 0.1);
`

export const WrapText = styled('div')`
	padding: 32px 0 11px;
`

export const WrapImage = styled('div')`
	max-width: 28px;
	max-height: 28px;
	img {
		position: static !important;
	}
`

export const WrapCircle = styled('div')`
	width: 92px;
	height: 92px;
	display: flex;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	border: 0.773108px solid rgba(9, 31, 44, 0.1);
`

export const Circle = styled('div')`
	width: 67px;
	height: 67px;
	display: flex;
	border-radius: 50%;
	align-items: center;
	position: relative;
	justify-content: center;
	border: 0.565213px solid rgba(9, 31, 44, 0.1);
	::after {
		top: 0;
		left: 0;
		content: '';
		width: 100%;
		height: 100%;
		border-width: 1px;
		position: absolute;
		border-radius: 50%;
		border-style: solid;
		transform: rotate(-45deg);
		border-bottom-color: transparent;
		border-top-color: ${({ theme }) => theme.palette.colors.GREEN};
		border-left-color: ${({ theme }) => theme.palette.colors.GREEN};
		border-right-color: ${({ theme }) => theme.palette.colors.GREEN};
	}
`
