import Link from 'next/link'
import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	min-height: 100vh;
	align-items: center;
	flex-direction: column;
	background-color: ${({ theme }) => theme.palette.colors.WHITE};
`

export const Main = styled('main')`
	width: 100%;
	flex-grow: 1;
	display: flex;
	flex-direction: column;
`
