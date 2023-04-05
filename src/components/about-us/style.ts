import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	align-items: center;
	margin: 136px 0 80px;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			margin: '80px 0 30px',
		},
	})}
`

export const WrapImage = styled('div')`
	width: 100%;
	height: 656px;
	position: relative;

	@media (min-height: 900px) {
		height: 756px;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			height: '375px',
		},
	})}
`

export const WrapTexts = styled('div')`
	display: grid;
	margin-top: 12px;
	align-items: end;
	justify-content: space-between;
	grid-template-columns: 465px 465px;

	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gap: '10px',
			marginTop: '7px',
			padding: '0 18px',
			alignItems: 'center',
			justifyContent: 'center',
			gridTemplateColumns: '1fr',
			'h2,h4': {
				textAlign: 'center',
			},
		},
	})}
`
