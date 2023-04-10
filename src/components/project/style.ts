import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	align-items: center;
	flex-direction: column;
`

export const Wrapper = styled('div')`
	width: 100%;
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
`

export const Header = styled('div')`
	gap: 50px;
	display: grid;
	position: relative;
	grid-template-columns: 0.65fr 0.35fr;
	::after {
		top: 0;
		left: -40%;
		width: 65%;
		content: '';
		z-index: -1;
		height: 100%;
		position: absolute;
		background-color: ${({ theme }) => theme.palette.colors.GRAY160};
		${({ theme }) => ({
			[theme.breakpoints.up('lg')]: {
				left: '-90vw',
				width: '100vw',
			},
		})}
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gridTemplateColumns: '1fr',
			padding: '20px 18px 15px',
		},
	})}
`

export const WrapImage = styled('div')`
	width: 90%;
	display: flex;
	padding-bottom: 20px;
	img {
		object-fit: contain !important;
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			width: '100%',
		},
	})}
`

export const Left = styled('div')`
	width: 100%;
	background-color: ${({ theme }) => theme.palette.colors.GRAY160};
`

export const Body = styled('div')`
	gap: 20px;
	display: flex;
	padding: 40px 0 35px;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gap: '12px',
			padding: '18px 18px 24px',
		},
	})}
`

export const Languages = styled('div')`
	gap: 12px;
	display: flex;
	flex-wrap: wrap;
	margin: 18px 0 72px;
	.language {
		height: 33px;
		display: flex;
		padding: 0 15px;
		min-height: 33px;
		max-height: 33px;
		border-radius: 4px;
		white-space: nowrap;
		align-items: center;
		justify-content: center;
		background-color: ${({ theme }) => theme.palette.colors.GRAY190};
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			margin: '10px 0 40px',
			'.language': {
				height: '26px',
				minHeight: '26px',
				maxHeight: '26px',
			},
		},
	})}
`

export const WrapLanguage = styled('div')`
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '0 18px',
		},
	})}
`

export const WrapImages = styled('div')`
	gap: 20px;
	display: grid;
	grid-template-columns: 0.6fr 0.4fr;
	& > div:nth-of-type(3n + 3) {
		background-color: ${({ theme }) => theme.palette.colors.GRAY160};
	}
	& > div:nth-of-type(3n - 1) {
		background-color: ${({ theme }) => theme.palette.colors.GRAY160};
	}
	& > div {
		width: 100%;
		height: 480px;
		display: flex;
		padding: 18px;
		overflow: hidden;
		flex-direction: column;
		background-color: ${({ theme }) => theme.palette.colors.GRAY170};
	}

	& > div {
		img {
			object-fit: contain !important;
		}
	}
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gap: '12px',
			gridTemplateColumns: '1fr',
			'& > div': {
				height: '290px',
			},
		},
		[theme.breakpoints.up('sm')]: {
			'& > div:nth-of-type(3n + 3)': {
				gridColumn: '1 / 3',
			},
		},
	})}
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
	padding: 25px 0;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '12px 18px 15px',
		},
	})}
`

export const WrapMobileProjectDetail = styled('div')`
	display: none;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			display: 'flex',
			padding: '0 18px',
			marginTop: '20px',
		},
	})}
`

export const WrapDesktopProjectDetail = styled('div')`
	display: flex;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			display: 'none',
		},
	})}
`
