import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	display: flex;
	position: relative;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`

export const WrapImage = styled('div')`
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	position: absolute;
`

export const Wrapper = styled('div')`
	z-index: 1;
	width: 100%;
	display: grid;
	gap: 22px 57px;
	padding: 28px 8px;
	grid-template-columns: repeat(2, 1fr);
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			padding: ' 59px 0 52px',
			gridTemplateColumns: 'repeat(4, 1fr)',
		},
	})}
`

export const Wrap = styled('div')`
	gap: 10px;
	display: flex;
	align-items: center;
	flex-direction: column;
	svg {
		width: 28px;
		height: 28px;
	}
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			gap: '24px',
			svg: {
				width: '44px',
				height: '44px',
			},
		},
	})}
`
