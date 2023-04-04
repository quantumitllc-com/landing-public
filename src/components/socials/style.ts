import { styled } from '@mui/material/styles'

export interface ISocial {
	variant: 'footer' | 'drawer-mobile'
}

export const Container = styled('div')<ISocial>`
	gap: 15px;
	display: grid;
	width: fit-content;
	white-space: nowrap;
	grid-template-columns: repeat(4, min-content);
	svg {
		path,
		circle {
			fill: ${({ theme, variant }) =>
				variant === 'drawer-mobile' ? theme.palette.colors.BLUE10 : theme.palette.colors.WHITE};
		}
		width: ${({ variant }) => variant === 'drawer-mobile' && '37px'};
		height: ${({ variant }) => variant === 'drawer-mobile' && '37px'};
	}
	a {
		display: flex;
		align-items: center;
	}
`
