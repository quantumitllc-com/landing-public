import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	margin-top: 20px;
	position: relative;
	align-items: center;
	flex-direction: column;

	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			marginTop: '120px',
		},
	})}
`
export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	margin-top: 44px;
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
	bottom: calc(100% - 102px);
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

export const WrapCards = styled('div')`
	width: 100%;
	display: grid;
	gap: 25px 20px;
	grid-template-columns: repeat(3, calc(100% / 3));
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: '1fr',
		},
	})}
`
