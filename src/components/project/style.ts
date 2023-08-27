import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding: 0 18px;
	margin-top: 60px;
	align-items: center;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			marginTop: '90px',
		},
	})}
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const Body = styled('div')`
	gap: 20px;
	display: flex;
	padding: 40px 0 35px;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gap: '12px',
			padding: '18px 18px 24px',
		},
	})}
`

export const Languages = styled('div')`
	gap: 12px;
	display: flex;
	flex-wrap: wrap;
	margin: 18px 0 72px;
	.language {
		height: 33px;
		display: flex;
		padding: 0 15px;
		min-height: 33px;
		max-height: 33px;
		border-radius: 4px;
		white-space: nowrap;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.palette.colors.GRAY190};
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			margin: '10px 0 40px',
			'.language': {
				height: '26px',
				minHeight: '26px',
				maxHeight: '26px',
			},
		},
	})}
`

export const WrapLanguage = styled('div')`
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '0 18px',
		},
	})}
`

export const WrapIconChevron = styled('span')`
	transform: rotate(-90deg);
	svg {
		path {
			stroke: ${({ theme }) => theme.palette.colors.GRAY210};
		}
	}
`

export const WrapBreadcrumb = styled('div')`
	padding: 25px 0;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '12px 18px 15px',
		},
	})}
`

export const Contents = styled('div')`
	gap: 100px;
	display: grid;
	grid-template-columns: 1fr;
`

export const WrapContent = styled('div')`
	gap: 75px;
	display: grid;
	grid-template-columns: 1fr 1fr;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gridTemplateColumns: '1fr',
			img: {
				maxHeight: '255px',
			},
		},
	})}
	${({ theme }) => ({
		[theme.breakpoints.between('sm', 'md')]: {
			img: {
				maxHeight: '350px',
			},
		},
	})}
`
