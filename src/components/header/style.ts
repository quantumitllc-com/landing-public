import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	height: 117px;
	min-height: 117px;
	max-height: 117px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			height: '55px',
			minHeight: '55px',
			maxHeight: '55px',
		},
	})}
`

export const Wrapper = styled('div')`
	top: 0;
	left: 0;
	width: 100%;
	z-index: 300;
	display: flex;
	position: fixed;
	align-items: center;
	background-color: white;
	justify-content: space-between;
	border-bottom: 1px solid ${({ theme }) => theme.palette.colors.GRAY};
`

export const Wrap = styled('div')`
	width: 100%;
	height: 117px;
	display: flex;
	margin: 0 auto;
	min-height: 117px;
	max-height: 117px;
	align-items: center;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('lg')]: {
			padding: '0 20px',
		},
		[theme.breakpoints.down('md')]: {
			height: '55px',
			minHeight: '55px',
			maxHeight: '55px',
		},
	})}
`

export const WrapLogo = styled('div')`
	display: flex;
	align-items: center;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			'.logo': {
				display: 'none',
			},
			'.logo-mobile': {
				display: 'flex',
			},
		},
		[theme.breakpoints.up('md')]: {
			'.logo': {
				display: 'flex',
			},
			'.logo-mobile': {
				display: 'none',
			},
		},
	})}
`

export const WrapDesktop = styled('div')`
	gap: 55px;
	flex-grow: 1;
	display: none;
	align-items: center;
	justify-content: flex-end;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	})}
`

export const WrapMobile = styled('div')`
	display: none;
	align-items: center;
	justify-content: space-between;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			display: 'flex',
		},
	})}
`
