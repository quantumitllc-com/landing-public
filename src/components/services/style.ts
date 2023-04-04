import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding: 210px 0 0;
	position: relative;
	align-items: center;
	flex-direction: column;
`
export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const WrapIcon = styled('div')`
	top: 180px;
	left: 0;
	position: absolute;
	svg {
		width: 80%;
		height: 100%;
	}
`

export const WrapText = styled('div')`
	padding: 20px 0 27px;
`

export const WrapCards = styled('div')`
	width: 100%;
	display: grid;
	gap: 25px 20px;
	grid-template-columns: repeat(3, 1fr);
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: '1fr',
		},
	})}
`
