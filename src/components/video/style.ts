'use client'

import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

export const ButtonPlay = styled(Button)`
	width: 190px;
	border: none;
	height: 190px;
	flex-shrink: 0;
	cursor: pointer;
	box-shadow: none;
	position: relative;
	border-radius: ${({ theme }) => theme.palette.borderradiuses['50%']};
`

export const WrapIconShowreels = styled('div')`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
	animation: spin 10s linear infinite;
	-moz-animation: spin 10s linear infinite;
	-webkit-animation: spin 10s linear infinite;

	@-moz-keyframes spin {
		100% {
			-moz-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	@keyframes spin {
		100% {
			-webkit-transform: rotate(360deg);
			transform: rotate(360deg);
		}
	}
`
