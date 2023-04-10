import { styled } from '@mui/material/styles'
import { Button, TextField as MuiTextField } from '@mui/material'

export const TextField = styled(MuiTextField)`
	.MuiInputBase-root {
		padding: 0 6px 0 25px;
		background-color: ${({ theme }) => theme.palette.colors.GRAY140};
	}
	input::placeholder {
		font-size: 12px;
		font-weight: 400;
		line-height: 14px;
		opacity: 1 !important;
		color: ${({ theme }) => theme.palette.colors.GRAY50};
	}
	input {
		font-size: 16px;
		font-weight: 400;
		line-height: 14px;
		opacity: 1 !important;
		color: ${({ theme }) => theme.palette.colors.GRAY50} !important;
	}
	.MuiOutlinedInput-root {
		border-radius: 30px;
		fieldset {
			border-color: transparent;
		}
	}

	input.MuiOutlinedInput-input:-webkit-autofill {
		border-radius: 0 !important;
	}

	input:-webkit-autofill,
	input:-webkit-autofill:hover,
	input:-webkit-autofill:focus,
	input:-webkit-autofill:active {
		-webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.palette.colors.GRAY140} inset !important;
		box-shadow: 0 0 0 30px ${({ theme }) => theme.palette.colors.GRAY140} inset !important;
		background-color: ${({ theme }) => theme.palette.colors.GRAY140} !important;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			input: {
				paddingTop: '6px !important',
				paddingBottom: '6px !important',
			},
			'.MuiOutlinedInput-root': {
				borderRadius: '22.2538px',
			},
			'.MuiInputBase-root': {
				padding: '0 4.5px 0 18px',
			},
			svg: {
				width: '12px',
				height: '12px',
			},
			'input::placeholder': {
				fontWeight: 400,
				lineHeight: '10px',
				fontSize: '8.90153px',
			},
		},
	})}
`

export const ButtonSubmit = styled(Button)`
	min-width: 94px;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			height: '26px',
			minWidth: '70px',
			fontWeight: 600,
			lineHeight: '11px',
			fontSize: '8.90153px',
			borderRadius: '22.2538px',
		},
	})}
`
