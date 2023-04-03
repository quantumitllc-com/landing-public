import { styled } from '@mui/material/styles'
import { FormControlLabel } from '@mui/material'

interface ILabel {
	isctive: string
}

export const Label = styled(FormControlLabel)<ILabel>`
	font-weight: 400;
	font-size: 14px;
	line-height: 151.5%;
	white-space: nowrap;
	color: ${({ theme, isctive }) =>
		isctive === 'true' ? theme.palette.colors.BLUE20 : theme.palette.colors.GRAY110};
`
