import { styled } from '@mui/material/styles'

export const Container = styled('main')`
	width: 100vw;
	height: 100vh;
	display: flex;
	user-select: none;
	justify-content: center;
`

export const Wrap = styled('div')`
	width: 100%;
	height: 100%;
	position: relative;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const WrapVideo = styled('div')`
	left: 80px;
	bottom: 90px;
	position: absolute;
`

export const WrapRobot = styled('div')`
	bottom: 0;
	width: 100%;
	right: -55px;
	height: 100%;
	max-width: 900px;
	max-height: 900px;
	position: absolute;
`

export const WrapContent = styled('div')`
	gap: 16px;
	width: 100%;
	height: 100%;
	display: flex;
	max-width: 590px;
	margin-top: -90px;
	flex-direction: column;
	justify-content: center;
`
