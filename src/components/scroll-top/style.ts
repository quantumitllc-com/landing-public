import { Button } from '@mui/material'
import { styled } from '@mui/material/styles'

export const GoUpButton = styled(Button)`
	left: 20px;
	padding: 0;
	width: 65px;
	bottom: 20px;
	height: 65px;
	z-index: 99;
	position: fixed;
	border-radius: 50px;
	transition: background-color 0.5s ease;
	background-color: ${({ theme }) => theme.palette.colors.GREEN};

	:hover {
		background-color: transparent;
		border: 2px solid ${({ theme }) => theme.palette.colors.GREEN};
		svg {
			path {
				stroke: ${({ theme }) => theme.palette.colors.GREEN};
			}
		}
	}
	svg {
		width: 65px;
		height: 65px;
		transform: rotate(-45deg);
		circle {
			fill: transparent;
		}
		path {
			transition: stroke 0.5s ease;
			stroke: ${({ theme }) => theme.palette.colors.WHITE};
		}
	}
`
