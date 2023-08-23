import { styled } from '@mui/material/styles'

interface ContainerProps {
	scrollPosition: number
}

export const Container = styled('div')<ContainerProps>`
	width: 100%;
	z-index: 999;
	height: 100%;
	display: flex;
	position: fixed;
	padding: 0 18px;
	max-height: 90px;
	min-height: 90px;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-webkit-transition: all 0.5s ease-in-out;
	background-color: ${({ theme, scrollPosition }) =>
		scrollPosition > 0 ? theme.palette.colors.BLUE : 'transparent'};
`

export const Wrapper = styled('div')`
	gap: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const WrapLeft = styled('div')`
	gap: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.md}px;
`

export const WrapRight = styled('div')``
