import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	display: flex;
	margin-top: 10px;
	align-items: center;
	justify-content: center;
	img {
		position: static !important;
	}
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			marginTop: '60px',
		},
	})}
`

export const Wrapper = styled('div')`
	width: 100%;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	.keen-slider__slide {
		cursor: pointer;
		max-width: 180px;
		min-width: 180px;
		min-height: 100px;
		max-height: 100px;
		${({ theme }) => ({
			[theme.breakpoints.down('sm')]: {
				maxWidth: '90px',
				maxHeight: '60px',
				minWidth: '90px',
				minHeight: '60px',
			},
			[theme.breakpoints.between('sm', 'md')]: {
				maxWidth: '135px',
				maxHeight: '80px',
				minWidth: '135px',
				minHeight: '80px',
			},
		})}
	}

	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			paddingBottom: '40px',
		},
	})}
`
