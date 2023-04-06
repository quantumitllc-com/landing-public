import { styled } from '@mui/material/styles'
import { TextField as MuiTextField } from '@mui/material'

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
`
