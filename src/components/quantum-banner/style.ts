import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	height: 190px;
	position: relative;

	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			height: '70px',
		},
	})}
`
