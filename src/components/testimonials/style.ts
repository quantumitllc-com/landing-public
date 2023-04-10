import { IconButton } from '@mui/material'
import { styled } from '@mui/material/styles'

interface IArrowButton {
	isright?: string
	disabled: boolean
}

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

export const Slider = styled('div')`
	width: 100%;
	display: flex;
	margin-top: 64px;
	position: relative;
	border-radius: 12px;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	.keen-slider {
		padding: 0;
		z-index: 2;
		border-radius: 12px;
	}
	:after {
		top: 0;
		z-index: 1;
		content: '';
		width: 100%;
		height: 100%;
		border-radius: 12px;
		position: absolute;
		background: transparent;
		box-shadow: ${({ theme }) => theme.palette.shadows.SHADOW};
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			marginTop: '34px',
			paddingLeft: '18px',
		},
	})}
`

export const ArrowButton = styled(IconButton)<IArrowButton>`
	padding: 0;
	transform: ${({ isright }) => (isright === 'true' ? 'rotate(180deg)' : 'unset')};

	svg {
		path:first-of-type {
			opacity: 1;
			fill: ${({ theme, disabled }) =>
				disabled ? theme.palette.colors.GRAY220 : theme.palette.colors.GREEN};
		}
		path:last-of-type {
			fill: ${({ theme, disabled }) =>
				disabled ? theme.palette.colors.BLUE : theme.palette.colors.WHITE};
		}
	}
`

export const WrapButtons = styled('div')`
	gap: 17px;
	right: 30px;
	z-index: 10;
	bottom: -50px;
	display: flex;
	position: absolute;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			display: 'none',
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
