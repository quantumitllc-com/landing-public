import { styled } from '@mui/material/styles'

interface ContainerProps {
	scrollPosition: number
}

export const Container = styled('div')<ContainerProps>`
	width: 100%;
	z-index: 999;
	height: 100%;
	display: flex;
	position: fixed;
	padding: 0 18px;
	max-height: 60px;
	min-height: 60px;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease-in-out;
	-o-transition: all 0.5s ease-in-out;
	-moz-transition: all 0.5s ease-in-out;
	-webkit-transition: all 0.5s ease-in-out;
	background-color: ${({ theme, scrollPosition }) =>
		scrollPosition > 0 ? theme.palette.colors.BLUE : 'transparent'};
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			maxHeight: '90px',
			minHeight: '90px',
		},
	})}
`

export const Wrapper = styled('div')`
	gap: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`

export const WrapLeft = styled('div')`
	gap: 70px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.md}px;
`

export const WrapRight = styled('div')``

export const WrapDesktop = styled('div')`
	width: 100%;
	display: none;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			display: 'flex',
		},
	})}
`

export const WrapMobile = styled('div')`
	width: 100%;
	display: none;
	align-items: center;
	justify-content: space-between;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			display: 'flex',
		},
	})}
`
