import { styled } from '@mui/material/styles'

export const Container = styled('main')`
	width: 100vw;
	height: 100vh;
	display: flex;
	padding: 0 18px;
	user-select: none;
	justify-content: center;
	img {
		position: absolute !important;
	}
	${({ theme }) => ({
		minHeight: '650px',
		[theme.breakpoints.up('md')]: {
			img: {
				minHeight: '650px',
			},
		},
	})}
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
		[theme.breakpoints.between('sm', 'md')]: {
			bottom: '200px',
		},
	})}
`

export const WrapRobot = styled('div')`
	bottom: 0;
	width: 100%;
	right: -18px;
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
		[theme.breakpoints.between('sm', 'md')]: {
			left: 'unset',
			right: '18px',
			maxWidth: '400px',
			maxHeight: '450px',
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
	flex-direction: column;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			gap: '16px',
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
	a {
		transition: all 0.2s ease-in-out;
		border: 1px solid ${({ theme }) => theme.palette.colors.GREEN};
	}
	a:hover {
		background-color: transparent;
		color: ${({ theme }) => theme.palette.colors.GREEN};
		transform: scale(1.02) !important;
		svg {
			transform: rotate(90deg);
			transition: all 0.2s ease-in-out;
			circle {
				transition: all 0.2s ease-in-out;
				fill: ${({ theme }) => theme.palette.colors.GREEN};
			}
			path {
				transition: stroke 0.5s ease;
				stroke: ${({ theme }) => theme.palette.colors.GREEN};
			}
		}
	}
`

export const WrapTexts = styled('div')`
	gap: 10px;
	display: flex;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.up('sm')]: {
			gap: '16px',
		},
	})}
`
