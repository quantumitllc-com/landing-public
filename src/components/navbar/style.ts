import { styled } from '@mui/material/styles'

export interface INavbar {
	variant: 'footer' | 'header' | 'drawer-mobile'
	onClick?: () => void
}

export const Nav = styled('nav')<INavbar>`
	ul {
		display: flex;
		white-space: nowrap;
		width: ${({ variant }) => variant === 'drawer-mobile' && '100%'};
		padding-top: ${({ variant }) => variant === 'drawer-mobile' && '12px'};
		gap: ${({ variant }) => (variant === 'drawer-mobile' ? '10px' : '32px')};
		align-items: ${({ variant }) => variant !== 'drawer-mobile' && 'center'};
		flex-direction: ${({ variant }) => variant === 'drawer-mobile' && 'column'};
	}
	li {
		a {
			font-size: 16px;
			font-weight: 500;
			line-height: 114.5%;
			letter-spacing: 0.0035em;
			color: ${({ theme, variant }) => {
				if (variant === 'footer') {
					return theme.palette.colors.GRAY20
				}
				return theme.palette.colors.GRAY10
			}};
			display: ${({ variant }) => variant === 'drawer-mobile' && 'flex'};
			padding: ${({ variant }) => variant === 'drawer-mobile' && '8px 0'};
			justify-content: ${({ variant }) => variant === 'drawer-mobile' && 'space-between'};
		}
	}
`
