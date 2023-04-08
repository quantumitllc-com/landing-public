import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding-top: 136px;
	align-items: center;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			paddingTop: '40px',
		},
	})}
`

export const WrapText = styled('div')`
	padding: 20px 0 27px;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			paddingTop: '10px',
		},
	})}
`
