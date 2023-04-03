import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	align-items: center;
	max-width: fit-content;
	justify-content: center;
	.MuiSelect-icon {
		top: calc(50% - 12px) !important;
	}

	.MuiInputBase-root {
		fieldset.MuiOutlinedInput-notchedOutline {
			border-radius: 50px;
			box-shadow: 0px 5px 5px rgba(8, 15, 52, 0.04);
			border-color: ${({ theme }) => theme.palette.colors.GRAY} !important;
		}
	}

	.MuiSelect-select {
		padding: 8px 36px 8px 9px !important;
	}
	.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline {
		border-color: ${({ theme }) => theme.palette.colors.GREEN} !important;
	}
`

export const MenuItemIcon = styled('div')`
	display: flex;
	margin-right: 15px;
	align-items: center;
	justify-content: center;
`

export const MenuItemWrap = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
`

export const RenderIcon = styled('div')`
	gap: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
`
