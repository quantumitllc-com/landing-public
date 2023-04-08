import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding: 124px 0 0;
	align-items: center;
	flex-direction: column;
`

export const WrapText = styled('div')`
	padding: 20px 0 27px;
`

export const WrapImage = styled('div')`
	height: 0;
	flex-grow: 1;
	display: flex;
	padding-bottom: 20px;
	img {
		position: static !important;
		object-fit: contain !important;
	}
`

export const Wrapper = styled('div')`
	gap: 14px;
	width: 100%;
	display: grid;
	padding: 42px 0;
	grid-template-columns: 1fr 1fr;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	& > div {
		width: 100%;
		height: 400px;
		display: flex;
		overflow: hidden;
		flex-direction: column;
	}
	& > div:nth-of-type(2) {
		grid-column: 2 / 3;
		grid-row: 2 / 3;
	}
	& > div:nth-of-type(3) {
		grid-column: 1 / 2;
		grid-row: 2 / 3;
	}
	& > div:nth-of-type(odd) {
		background-color: ${({ theme }) => theme.palette.colors.GRAY160};
	}
	& > div:nth-of-type(even) {
		background-color: ${({ theme }) => theme.palette.colors.GRAY170};
	}
	& > div:first-of-type,
	& > div:last-of-type {
		height: 550px;
		height: 550px;
		grid-column: 1 / 3;
	}
`

export const WrapIconChevron = styled('span')`
	transform: rotate(-90deg);
	svg {
		path {
			stroke: ${({ theme }) => theme.palette.colors.GREEN};
		}
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
