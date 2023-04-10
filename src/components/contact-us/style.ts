import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	display: flex;
	position: relative;
	align-items: center;
	padding: 80px 0 50px;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '25px 0',
		},
	})}
`

export const WrapContent = styled('div')`
	gap: 50px;
	width: 100%;
	height: 100%;
	display: flex;
	position: absolute;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			top: 0,
			gap: '15px',
			padding: '0 38px',
		},
	})}
`

export const Header = styled('div')`
	display: flex;
	align-items: center;
	padding: 16px 16px 0;
	justify-content: flex-end;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '10px 10px 18px 0',
		},
	})}
`

export const Form = styled('form')`
	display: flex;
	flex-direction: column;
	padding: 10px 75px 50px 60px;

	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '10px 18px 10px',
		},
	})}
`

export const WrapInputs = styled('div')`
	gap: 15px;
	width: 100%;
	display: grid;
	padding: 40px 0 20px;
	grid-template-columns: 1fr 1fr;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gap: '16px',
			padding: '30px 0 36px',
			gridTemplateColumns: '1fr',
		},
	})}
`

export const WrapButtonRequest = styled('div')`
	margin-top: 55px;
	position: relative;
	.icon-spread {
		top: -20px;
		right: 100%;
		position: absolute;
		svg {
			${({ theme }) => ({
				[theme.breakpoints.down('sm')]: {
					width: '28px',
					height: '28px',
				},
			})};
		}
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			marginTop: '30px',
		},
	})};
`

export const WrapperChecks = styled('div')`
	display: grid;
	padding: 6px 0 41px;
	grid-template-columns: repeat(4, auto);
`
