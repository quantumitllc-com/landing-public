import { styled } from '@mui/material/styles'

export const Container = styled('main')`
	width: 100vw;
	height: 100vh;
	display: flex;
	user-select: none;
	justify-content: center;
	img {
		position: absolute !important;
	}
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
	display: none;
	position: absolute;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	})}
`

export const WrapMobileVideo = styled('div')`
	left: 18px;
	bottom: 230px;
	display: flex;
	position: absolute;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	})}
`

export const WrapRobot = styled('div')`
	right: 18px;
	bottom: 0;
	width: 100%;
	height: 100%;
	max-width: 380px;
	max-height: 370px;
	position: absolute;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			left: 'unset',
			right: '-55px',
			maxWidth: '900px',
			maxHeight: '900px',
		},
	})}
`

export const WrapContent = styled('div')`
	gap: 10px;
	width: 100%;
	height: 100%;
	display: flex;
	max-width: 590px;
	margin-top: -90px;
	padding: 0 18px;
	flex-direction: column;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			gap: '16px',
			padding: '0 18px',
		},
	})}
`

export const WrapButton = styled('div')`
	display: flex;
	margin-top: 13px;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.up('sm')]: {
			marginTop: '17px',
			justifyContent: 'flex-start',
		},
	})}
`
