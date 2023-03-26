import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding: 230px 0 0;
	position: relative;
	align-items: center;
	flex-direction: column;
`

export const WrapIcon = styled('div')`
	right: 0;
	top: 180px;
	width: 100%;
	display: flex;
	position: absolute;
	justify-content: flex-end;
	svg {
		width: 80%;
		height: 100%;
	}
`

export const WrapText = styled('div')`
	padding: 20px 0 27px;
`
