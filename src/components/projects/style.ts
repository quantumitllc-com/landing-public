import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	align-items: center;
	flex-direction: column;
`

export const Wrapper = styled('div')`
	gap: 14px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const WrapIconChevron = styled('span')`
	transform: rotate(-90deg);
	svg {
		path {
			stroke: ${({ theme }) => theme.palette.colors.GRAY210};
		}
	}
`

export const WrapBreadcrumb = styled('div')`
	margin: 25px 0;
`
