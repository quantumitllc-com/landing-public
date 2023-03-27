import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	flex-grow: 1;
	flex-direction: column;
`

export const Header = styled('div')`
	height: 55px;
	display: flex;
	align-items: center;
	padding: 0 15px 0 18px;
	justify-content: space-between;
	border-bottom: 1px solid ${({ theme }) => theme.palette.colors.GRAY};
`

export const Wrapper = styled('div')`
	flex-grow: 1;
	display: flex;
	flex-direction: column;
	padding: 12px 24px 40px;
	justify-content: space-between;
`
