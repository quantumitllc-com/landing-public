import { styled } from '@mui/material/styles'
import MuiButton, { ButtonProps } from '@mui/material/Button'

export const Container = styled('main')`
	width: 100vw;
	height: 100vh;
	display: flex;
	user-select: none;
	align-items: flex-end;
	justify-content: center;
	img {
		position: absolute !important;
	}
`

export const Button = styled(MuiButton)<ButtonProps>`
	height: 40px;
	font-size: 13px;
	font-weight: 600;
	width: fit-content;
	line-height: 114.5%;
	padding: 0 6px 0 18px;
	letter-spacing: 0.045px;
	transition: all 0.2s ease-in-out;
	border: 1px solid ${({ theme }) => theme.palette.colors.GREEN};
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			height: '48px',
			fontSize: '15px',
			letterSpacing: '0.052px',
			padding: '7px 10px 7px 20px',
		},
	})}

	:hover {
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

export const WrapDesktop = styled('div')`
	width: 100vw;
	display: none;
	flex-grow: 1;
	padding: 0 18px;
	justify-content: center;
	height: calc(100vh - 90px);
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	})}
`

export const WrapDesktopContent = styled('div')`
	width: 100%;
	height: 100%;
	position: relative;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const WrapDesktopContainer = styled('div')`
	gap: 16px;
	height: 100%;
	flex-grow: 1;
	display: flex;
	padding-bottom: 290px;
	flex-direction: column;
	justify-content: center;
	max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
`

export const WrapDesktopVideo = styled('div')`
	left: 80px;
	z-index: 99;
	bottom: 90px;
	display: none;
	position: absolute;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	})}
`

export const WrapDesktopRobot = styled('div')`
	right: 0;
	bottom: 0;
	width: 100%;
	height: 100%;
	max-width: 790px;
	max-height: 800px;
	position: absolute;
`

export const WrapMobile = styled('div')`
	width: 100vw;
	display: flex;
	position: relative;
	padding: 60px 18px 0;
	justify-content: center;
	height: 100vh;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	})};
`

export const WrapMobileContent = styled('div')`
	gap: 23px;
	width: 100%;
	height: 100%;
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const WrapMobileContainer = styled('div')`
	height: 40%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.sm}px;
`

export const WrapMobileRobot = styled('div')`
	width: 100%;
	height: 60%;
	position: relative;
	margin-right: -54px;
`

export const WrapMobileVideo = styled('div')`
	top: 0;
	left: 0;
	z-index: 99;
	display: flex;
	position: absolute;
`
