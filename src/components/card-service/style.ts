import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	position: relative;
	:hover::after {
		right: -8px;
		bottom: -8px;
		background-color: ${({ theme }) => theme.palette.colors.GREEN};
	}
	::after {
		right: 0;
		bottom: 0;
		z-index: -2;
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 12px;
		transition: 0.3s ease-in-out;
		background-color: transparent;
		box-shadow: 0px 0px 100px rgba(15, 54, 78, 0.1);
	}
`

export const Wrapper = styled('div')`
	padding: 25px;
	overflow: hidden;
	position: relative;
	background: #ffffff;
	border-radius: 12px;
	transition: all 0.3s ease;
	border: 1px solid rgba(0, 0, 0, 0.07);
	box-shadow: 0px 0px 100px rgba(15, 54, 78, 0.1);
	h2,
	h3 {
		transition: color 0.5s;
	}
	.wrap-circle,
	.circle {
		transition: border-color 0.5s;
		border-color: ${({ theme }) => theme.palette.colors.GRAY130};
		::after {
			transition: transform 1s ease-in-out;
		}
	}
	.image {
		transition: background-image 1s ease-in-out;
	}
	:hover::before {
		transform: translate(0) scale(2);
	}
	:hover {
		background: transparent;
		h2 {
			color: ${({ theme }) => theme.palette.colors.WHITE};
		}
		h3 {
			color: ${({ theme }) => theme.palette.colors.GRAY40};
		}
		.wrap-circle,
		.circle {
			border-color: ${({ theme }) => theme.palette.colors.GRAY60};
		}
		.circle::after {
			border-left-color: transparent;
			border-bottom-color: ${({ theme }) => theme.palette.colors.GREEN};
		}
		.dark_image {
			display: none;
		}
		.light_image {
			display: flex;
		}
	}
	::before {
		top: 0;
		left: 0;
		z-index: -1;
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		border-radius: 50%;
		transition: 0.3s ease-in-out;
		transform: translate(+100%, 20%) scale(0);
		background-color: ${({ theme }) => theme.palette.colors.BLUE};
	}
`

export const WrapText = styled('div')`
	padding: 32px 0 11px;
`

export const WrapImage = styled('div')`
	width: 28px;
	height: 28px;

	&.dark_image {
		display: flex;
	}
	&.light_image {
		display: none;
	}
`

export const WrapCircle = styled('div')`
	width: 92px;
	height: 92px;
	display: flex;
	border-radius: 50%;
	align-items: center;
	justify-content: center;
	border: 0.773108px solid;
`

export const Circle = styled('div')`
	width: 67px;
	height: 67px;
	display: flex;
	border-radius: 50%;
	align-items: center;
	position: relative;
	justify-content: center;
	border: 0.565213px solid ${({ theme }) => theme.palette.colors.GRAY130};
	::after {
		top: 0;
		left: 0;
		content: '';
		width: 100%;
		height: 100%;
		border-width: 1px;
		position: absolute;
		border-radius: 50%;
		border-style: solid;
		transform: rotate(-45deg);
		border-bottom-color: transparent;
		border-top-color: ${({ theme }) => theme.palette.colors.GREEN};
		border-left-color: ${({ theme }) => theme.palette.colors.GREEN};
		border-right-color: ${({ theme }) => theme.palette.colors.GREEN};
	}
`
