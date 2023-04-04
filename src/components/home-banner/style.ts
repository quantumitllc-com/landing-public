import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding: 55px 0;
	position: relative;
	align-items: center;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '30px 0 40px',
		},
	})}
`

export const WrapText = styled('div')`
	max-width: 575px;
	padding: 20px 0 36px;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '8px 0 15px',
		},
	})};
`

export const WrapText10 = styled('div')`
	display: flex;
	max-width: 680px;
	align-items: center;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '0 24px',
		},
	})}
`

export const WrapLaptop = styled('div')`
	width: 100%;
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
	svg {
		width: 100%;
		height: 100%;
		max-width: ${({ theme }) => theme.breakpoints.values.md}px;
		.video {
			fill: transparent;
		}
	}
	.screen {
		top: 2.85%;
		position: absolute;
		.video_play {
			top: 15%;
			width: 53%;
			height: 51%;
			left: 23.5%;
			display: flex;
			position: absolute;
			align-items: center;
			justify-content: center;
			video {
				width: 100%;
				height: 100%;
			}
			.play {
				z-index: 4;
				top: center;
				position: absolute;
				svg {
					max-width: 200px;
					max-height: 200px;
					${({ theme }) => ({
						[theme.breakpoints.down('sm')]: {
							maxWidth: '100px',
							maxHeight: '100px',
						},
						[theme.breakpoints.between('sm', 'md')]: {
							maxWidth: '140px',
							maxHeight: '140px',
						},
					})}
				}
			}
		}
		& > svg {
			width: 100%;
			path {
				fill: transparent;
			}
		}
	}
`

export const WrapBackground = styled('div')`
	top: 0;
	left: 0;
	right: 0;
	z-index: -1;
	height: 1450px;
	position: absolute;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			height: '800px',
		},
		[theme.breakpoints.between('sm', 'md')]: {
			height: '1400px',
		},
	})}
	svg {
		width: 100%;
		height: 100%;
	}
`
