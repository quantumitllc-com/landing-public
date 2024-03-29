import { styled } from '@mui/material/styles'

export const Container = styled('footer')`
	width: 100%;
	display: flex;
	padding: 50px 18px;
	background-color: ${({ theme }) => theme.palette.colors.BLUE};
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			padding: '30px 18px 35px',
		},
	})}
`

export const Wrapper = styled('div')`
	gap: 45px;
	width: 100%;
	display: flex;
	margin: 0 auto;
	flex-direction: column;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gap: '23px',
		},
	})}
`

export const Up = styled('div')`
	width: 100%;
	display: flex;
	justify-content: space-between;
	& > .wrap-up {
		width: 100%;
		${({ theme }) => ({
			[theme.breakpoints.up('md')]: {
				maxWidth: 'max-content',
			},
		})}
	}
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			flexDirection: 'column',
		},
	})}
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
		${({ theme }) => ({
			[theme.breakpoints.down('md')]: {
				fontSize: '10px',
				lineHeight: '12px',
			},
		})}
	}
`

export const WrapContact = styled('div')`
	gap: 55px;
	display: flex;
	flex-wrap: wrap;
	margin-top: 30px;
	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			gap: '12px',
			margin: '35px 0 38px',
			svg: {
				width: '36px',
				height: '36px',
			},
		},
		[theme.breakpoints.up('md')]: {
			flexWrap: 'nowrap',
			whiteSpace: 'nowrap',
		},
	})}
	a:hover {
		svg {
			path,
			circle {
				transition: all 0.8s ease;
				stroke: ${({ theme }) => theme.palette.colors.GREEN};
			}
		}
		h5 {
			transition: all 0.8s ease;
			color: ${({ theme }) => theme.palette.colors.GREEN};
		}
	}
`

export const WrapMobileSocial = styled('div')`
	display: flex;
	align-items: center;
	${({ theme }) => ({
		[theme.breakpoints.up('md')]: {
			display: 'none',
		},
	})}
`

export const WrapDesktopSocial = styled('div')`
	display: flex;
	justify-content: flex-start;

	${({ theme }) => ({
		[theme.breakpoints.down('md')]: {
			display: 'none',
		},
	})}
`

export const WrapLogo = styled('div')`
	display: flex;
	align-items: center;
	margin-bottom: 12px;
	svg {
		${({ theme }) => ({
			[theme.breakpoints.down('md')]: {
				width: '260px',
				height: '45px',
			},
		})}
	}
`
