import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	align-items: center;
	flex-direction: column;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	flex-direction: column;
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

export const WrapCards = styled('div')`
	gap: 14px;
	width: 100%;
	display: grid;
	grid-template-columns: 1fr 1fr;

	& > div {
		width: 100%;
		height: 400px;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		background-color: ${({ theme }) => theme.palette.colors.GRAY160};
	}

	& > div:nth-of-type(3n + 1) {
		background-color: ${({ theme }) => theme.palette.colors.GRAY170};
	}
`

export const WrapCardTexts = styled('div')`
	gap: 5px;
	display: flex;
	height: 100px;
	padding-top: 25px;
	align-items: center;
	flex-direction: column;
`
export const WrapImage = styled('div')`
	height: 0;
	flex-grow: 1;
	display: flex;
	padding-bottom: 20px;
	img {
		object-fit: contain !important;
	}
`
