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
		gap: ${({ variant }) =>
			variant === 'header' ? '70px' : variant === 'drawer-mobile' ? '10px' : '32px'};
		align-items: ${({ variant }) => variant !== 'drawer-mobile' && 'center'};
		flex-direction: ${({ variant }) => variant === 'drawer-mobile' && 'column'};
	}
	li {
		a {
			font-size: ${({ theme }) => theme.palette.fontsizes[16]};
			font-weight: ${({ theme }) => theme.palette.fontweights[500]};
			line-height: ${({ theme }) => theme.palette.lineheights['114.5%']};
			letter-spacing: ${({ theme }) => theme.palette.letterspaces['0.056']};
			color: ${({ theme, variant }) =>
				variant === 'header'
					? theme.palette.colors.GRAY200
					: variant === 'footer'
					? theme.palette.colors.GRAY20
					: theme.palette.colors.GRAY10};
			display: ${({ variant }) => variant === 'drawer-mobile' && 'flex'};
			padding: ${({ variant }) => variant === 'drawer-mobile' && '8px 0'};
			justify-content: ${({ variant }) => variant === 'drawer-mobile' && 'space-between'};
		}
	}
	${({ theme, variant }) => ({
		[theme.breakpoints.down('sm')]: {
			display: variant === 'footer' ? 'none' : 'flex',
		},
	})}
`
