import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding-top: 210px;
	position: relative;
	align-items: center;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			paddingTop: '60px',
		},
	})}
`
export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	padding-top: 120px;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '30px 18px 0',
		},
	})}
`

export const WrapIcon = styled('div')`
	left: 0;
	top: 180px;
	position: absolute;
	svg {
		width: 80%;
		height: 100%;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			top: '30px',
		},
	})}
`

export const WrapText = styled('div')`
	padding: 20px 18px 27px;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '8px 18px 18px',
		},
	})}
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
