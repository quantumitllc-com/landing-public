import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	margin: 180px 0 110px;
	flex-direction: column;
	justify-content: center;

	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			margin: '65px 0 38px',
		},
	})}
`

export const Wrapper = styled('div')`
	width: 100%;
	padding: 56px 60px;
	position: relative;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	border-radius: ${({ theme }) => theme.palette.borderradiuses[16]};
	background: linear-gradient(180deg, #fafafa 0%, rgba(250, 250, 250, 0) 100%);
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '27px 18px',
			borderRadius: theme.palette.borderradiuses[0],
		},
	})}
`

export const WrapImage = styled('div')`
	top: -62px;
	width: 100%;
	right: -58px;
	max-width: 116px;
	max-height: 124px;
	position: absolute;
	img {
		position: static !important;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			top: '-42px',
			right: '18px',
			maxWidth: '80px',
			maxHeight: '84px',
		},
	})}
`

export const Ul = styled('ul')`
	width: 100%;
	display: grid;
	gap: 50px 198px;
	margin-top: 90px;
	grid-template-columns: 1fr 1fr;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gap: '25px 0',
			marginTop: '42px',
			gridTemplateColumns: '1fr',
		},
	})}
`

export const Li = styled('li')`
	gap: 20px;
	display: flex;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gap: '13px',
		},
	})}
`

export const WrapTexts = styled('div')`
	gap: 11px;
	display: flex;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gap: '5px',
		},
	})}
`
