import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding-top: 230px;
	position: relative;
	align-items: center;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			paddingTop: '60px',
		},
	})}
`

export const WrapIcon = styled('div')`
	right: 0;
	top: 180px;
	width: 100%;
	display: flex;
	position: absolute;
	justify-content: flex-end;
	svg {
		width: 80%;
		height: 100%;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			top: '40px',
		},
	})}
`

export const WrapText = styled('div')`
	padding: 20px 0 27px;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '8px 18px 17px',
		},
	})}
`

export const Slider = styled('div')`
	width: 100%;
	display: flex;
	margin-top: 64px;
	position: relative;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const WrapButtons = styled('div')`
	gap: 17px;
	width: 100%;
	display: flex;
	margin-top: 22px;
	padding-right: 32px;
	align-items: center;
	justify-content: flex-end;
	button:first-of-type {
		transform: rotate(180deg);
	}
	.MuiButtonBase-root {
		padding: 0;
		border-radius: 50%;
	}

	.MuiTouchRipple-root .MuiTouchRipple-child {
		border-radius: 50%;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	})}
`
