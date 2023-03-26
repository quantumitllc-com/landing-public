import { styled } from '@mui/material/styles'
import { TextField as MuiTextField } from '@mui/material'

export const TextField = styled(MuiTextField)`
	.MuiInputBase-root {
		padding: 0 6px 0 25px;
		background-color: ${({ theme }) => theme.palette.colors.GRAY60};
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
		color: ${({ theme }) => theme.palette.colors.GRAY50};
	}
	.MuiOutlinedInput-root {
		border-radius: 30px;
		fieldset {
			border-color: transparent;
		}
	}
`
