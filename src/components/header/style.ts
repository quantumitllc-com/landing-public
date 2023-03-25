import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	height: 117px;
	min-height: 117px;
	max-height: 117px;
`

export const Wrapper = styled('div')`
	top: 0;
	left: 0;
	width: 100%;
	z-index: 300;
	display: flex;
	position: fixed;
	align-items: center;
	background-color: white;
	justify-content: space-between;
	border-bottom: 1px solid ${({ theme }) => theme.palette.colors.GRAY};
`

export const Wrap = styled('div')`
	width: 100%;
	height: 117px;
	display: flex;
	margin: 0 auto;
	min-height: 117px;
	max-height: 117px;
	align-items: center;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`
