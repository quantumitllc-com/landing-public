import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export const ButtonPlay = styled(Button)`
	width: 104px;
	border: none;
	height: 104px;
	flex-shrink: 0;
	cursor: pointer;
	box-shadow: none;
	position: relative;
	border-radius: ${({ theme }) => theme.palette.borderradiuses['50%']};
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			width: '190px',
			height: '190px',
		},
		[theme.breakpoints.between('sm', 'md')]: {
			width: '130px',
			height: '130px',
		},
	})}
`

export const WrapIconShowreels = styled('div')`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	animation: rotate 15s linear infinite;
	-moz-animation: rotate 15s linear infinite;
	-webkit-animation: rotate 15s linear infinite;

	svg {
		width: 100%;
		height: 100%;
	}

	@-moz-keyframes rotate {
		from {
			-moz-transform: rotate(-360deg);
		}
		to {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes rotate {
		from {
			-webkit-transform: rotate(-360deg);
		}
		to {
			-webkit-transform: rotate(360deg);
		}
	}

	@keyframes rotate {
		from {
			-webkit-transform: rotate(-360deg);
			transform: rotate(-360deg);
		}
		to {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`

export const WrapPlay = styled('div')`
	display: flex;
	padding-left: 8px;
	align-items: center;
	justify-content: center;
	svg {
		width: 40px;
		height: 40px;
		${({ theme }) => ({
			[theme.breakpoints.up('md')]: {
				width: '55px',
				height: '55px',
			},
			[theme.breakpoints.between('sm', 'md')]: {
				width: '45px',
				height: '45px',
			},
		})}
	}
`

export const WrapVideo = styled('div')`
	video {
		${({ theme }) => ({
			[theme.breakpoints.up('md')]: {
				width: '70vw',
				height: '70vh',
				minHeight: '400px',
			},
			[theme.breakpoints.between('sm', 'md')]: {
				width: '100vw',
				height: '100vh',
			},
		})}
	}
`
