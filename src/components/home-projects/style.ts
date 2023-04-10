import { styled } from '@mui/material/styles'

interface IWrapper {
	length: number
}

export const Container = styled('div')`
	display: flex;
	padding-top: 124px;
	align-items: center;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			paddingTop: '90px',
		},
	})}
`

export const WrapText = styled('div')`
	padding: 20px 0 27px;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '8px 18px 18px',
		},
	})}
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

export const Wrapper = styled('div')<IWrapper>`
	gap: 14px;
	width: 100%;
	display: grid;
	padding: 42px 0;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;

	& > div {
		width: 100%;
		height: 400px;
		display: flex;
		overflow: hidden;
		flex-direction: column;
		background-color: ${({ theme }) => theme.palette.colors.GRAY160};
	}

	${({ theme, length }) => ({
		gridTemplateColumns: length === 1 ? '1fr' : '1fr 1fr',
		'& > div:first-of-type': {
			height: length !== 2 && length !== 1 && '550px',
			gridColumn: length !== 2 && length !== 1 && '1 / 3',
		},
		'& > div:nth-of-type(2)': {
			gridRow: length !== 2 && length !== 1 && '2 / 3',
			gridColumn: length !== 2 && length !== 1 && '2 / 3',
			backgroundColor: length === 1 ? theme.palette.colors.GRAY160 : theme.palette.colors.GRAY170,
			h3: {
				color: theme.palette.colors.WHITE,
			},
		},
		'& > div:nth-of-type(4)': {
			height: length === 4 && '550px',
			gridColumn: length === 4 && '1 / 3',
			backgroundColor: theme.palette.colors.GRAY170,
			h3: {
				color: theme.palette.colors.WHITE,
			},
		},
		'& > div:nth-of-type(6)': {
			height: '550px',
			gridColumn: '1 / 3',
			backgroundColor: theme.palette.colors.GRAY170,
			h3: {
				color: theme.palette.colors.WHITE,
			},
		},
		[theme.breakpoints.down('sm')]: {
			gap: '12px',
			padding: '30px 18px 24px',
			gridTemplateColumns: '1fr',
			'& > div, & > div:nth-of-type(6)': {
				height: '270px',
			},
			'& > div:first-of-type, & > div:nth-of-type(4)': {
				height: '270px',
				gridColumn: '1 / 3',
			},
			'& > div:nth-of-type(2)': {
				gridRow: '2 / 3',
				gridColumn: '1 / 3',
			},
		},
	})}
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
