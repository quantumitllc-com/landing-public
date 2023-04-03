import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding: 55px 0;
	position: relative;
	align-items: center;
	flex-direction: column;
`

export const WrapText = styled('div')`
	padding: 20px 0 36px;
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
				cursor: pointer;
				position: absolute;
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
	height: 1400px;
	z-index: -1;
	position: absolute;
	svg {
		width: 100%;
		height: 100%;
	}
`
