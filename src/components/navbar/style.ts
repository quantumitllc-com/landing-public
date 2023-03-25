import { styled } from '@mui/material/styles'

export interface INavbar {
	variant: 'footer' | 'header'
}

export const Nav = styled('nav')<INavbar>`
	ul {
		gap: 32px;
		display: flex;
		white-space: nowrap;
		align-items: center;
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
		}
	}
`
