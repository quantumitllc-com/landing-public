import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`

export const Wrapper = styled('div')`
	width: 100%;
	margin: 136px 0 80px;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const WrapImage = styled('div')`
	width: 100%;
	height: 656px;
	position: relative;

	@media (min-height: 900px) {
		height: 756px;
	}
`

export const WrapTexts = styled('div')`
	display: grid;
	margin-top: 12px;
	align-items: end;
	justify-content: space-between;
	grid-template-columns: 465px 465px;
`

export const HighLight = styled('span')`
	color: ${({ theme }) => theme.palette.colors.GRAY100};
`
