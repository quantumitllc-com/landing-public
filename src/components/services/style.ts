import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding: 210px 0 0;
	position: relative;
	align-items: center;
	flex-direction: column;
`

export const WrapIcon = styled('div')`
	top: 180px;
	position: absolute;
	svg {
		width: 80%;
		height: 100%;
	}
`

export const WrapText = styled('div')`
	padding: 20px 0 27px;
`
