import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	gap: 32px;
	display: flex;
	border-radius: 12px;
	flex-direction: column;
	padding: 20px 50px 20px 30px;
	justify-content: space-between;
	box-shadow: ${({ theme }) => theme.palette.shadows.SHADOW};
	background-color: ${({ theme }) => theme.palette.colors.WHITE};
	border: 1px solid ${({ theme }) => theme.palette.colors.GRAY230};
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '12px 40px 20px 12px',
		},
	})}
`

export const WrapText = styled('div')`
	padding-left: 5px;
	position: relative;
	.icon {
		top: -10px;
		left: -5px;
		position: absolute;
	}
`
