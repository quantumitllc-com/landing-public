import { styled } from '@mui/material/styles'

export interface ISelect {
	variant: 'header' | 'drawer-mobile'
}

export const Container = styled('div')<ISelect>`
	display: flex;
	align-items: center;
	max-width: fit-content;
	justify-content: center;
	.MuiSelect-icon {
		top: calc(50% - 12px) !important;
	}

	.MuiInputBase-root {
		fieldset.MuiOutlinedInput-notchedOutline {
			border-radius: ${({ variant }) => variant === 'header' && '50px'} !important;
			box-shadow: ${({ variant }) =>
				variant === 'header' && '0px 5px 5px rgba(8, 15, 52, 0.04)'} !important;
			border-color: ${({ theme, variant }) =>
				variant === 'drawer-mobile' ? 'transparent' : theme.palette.colors.GRAY} !important;
		}
	}

	.MuiSelect-select {
		padding: ${({ variant }) =>
			variant === 'drawer-mobile' ? '8px 25px 8px 9px' : '8px 36px 8px 9px'}!important;
	}
	.MuiInputBase-root.Mui-focused fieldset.MuiOutlinedInput-notchedOutline {
		border-color: ${({ theme }) => theme.palette.colors.GREEN} !important;
	}
`

export const MenuItemIcon = styled('div')<ISelect>`
	display: flex;
	overflow: hidden;
	border-radius: 50%;
	margin-right: 15px;
	align-items: center;
	justify-content: center;
	svg {
		width: ${({ variant }) => variant === 'drawer-mobile' && '24px'};
		height: ${({ variant }) => variant === 'drawer-mobile' && '24px'};
	}
`

export const MenuItemWrap = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
`

export const RenderIcon = styled('div')<ISelect>`
	gap: 8px;
	display: flex;
	align-items: center;
	justify-content: center;

	.icon {
		overflow: hidden;
		border-radius: 50%;
		svg {
			width: ${({ variant }) => variant === 'drawer-mobile' && '24px'};
			height: ${({ variant }) => variant === 'drawer-mobile' && '24px'};
		}
	}
`
