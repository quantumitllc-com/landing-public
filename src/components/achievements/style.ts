import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	margin-top: 300px;
`

export const WrapImage = styled('div')`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
`

export const Wrapper = styled('div')`
	z-index: 1;
	width: 100%;
	display: grid;
	padding: 59px 0 52px;
	grid-template-columns: repeat(4, 1fr);
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`
