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
		right: 4px !important;
	}

	.MuiSelect-iconOpen {
		right: 4px !important;
		top: calc(50% - 16px) !important;
	}

	.MuiInputBase-root {
		fieldset.MuiOutlinedInput-notchedOutline {
			border-radius: ${({ variant }) => variant === 'header' && '50px'} !important;
			box-shadow: ${({ variant }) =>
				variant === 'header' && '0px 5px 5px rgba(8, 15, 52, 0.04)'} !important;
			border-color: transparent !important;
		}
	}

	.MuiSelect-select {
		background: ${({ variant }) => variant === 'header' && 'rgba(255, 255, 255, 0.24)'} !important;
		border-radius: ${({ variant }) => variant === 'header' && '50px'} !important;
		padding: ${({ variant }) =>
			variant === 'drawer-mobile' ? '8px 25px 8px 9px' : '9px 21px 9px 9px'}!important;
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
	gap: 4px;
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
