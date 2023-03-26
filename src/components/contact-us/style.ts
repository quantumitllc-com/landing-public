import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	display: flex;
	position: relative;
	align-items: center;
	padding: 80px 0 50px;
	flex-direction: column;
`

export const WrapContent = styled('div')`
	gap: 50px;
	width: 100%;
	height: 100%;
	display: flex;
	position: absolute;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`

export const Header = styled('div')`
	display: flex;
	align-items: center;
	padding: 16px 16px 0;
	justify-content: flex-end;
`

export const Form = styled('form')`
	padding: 10px 75px 50px 60px;
`

export const WrapInputs = styled('div')`
	gap: 15px;
	width: 100%;
	display: grid;
	max-width: 555px;
	padding: 40px 0 20px;
	grid-template-columns: 1fr 1fr;
`
