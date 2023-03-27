import { styled } from '@mui/material/styles'

export const Container = styled('footer')`
	width: 100%;
	display: flex;
	padding: 50px 0;
	background-color: ${({ theme }) => theme.palette.colors.BLUE};
`

export const Wrapper = styled('div')`
	gap: 65px;
	width: 100%;
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const Up = styled('div')`
	display: flex;
	justify-content: space-between;
	& > .wrap-up {
		width: 100%;
		max-width: 450px;
	}
`

export const Down = styled('div')`
	display: flex;
	align-items: center;
	justify-content: space-between;

	& > span {
		font-size: 14px;
		font-weight: 400;
		line-height: 16px;
		color: ${({ theme }) => theme.palette.colors.GRAY30};
	}
`

export const WrapContact = styled('div')`
	gap: 55px;
	display: flex;
	margin-top: 50px;
	width: fit-content;
	white-space: nowrap;
`
