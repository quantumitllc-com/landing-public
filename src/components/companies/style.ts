import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	display: flex;
`

export const Wrapper = styled('div')`
	width: 100%;
	margin: 0 auto;
	padding-bottom: 120px;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	.react-multi-carousel-item {
		max-width: 180px;
		min-width: 180px;
		min-height: 100px;
		max-height: 100px;
		${({ theme }) => ({
			[theme.breakpoints.down('sm')]: {
				maxWidth: '90px',
				maxHeight: '50px',
				minWidth: '90px',
				minHeight: '50px',
			},
		})}
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			paddingBottom: '40px',
		},
	})}
`
