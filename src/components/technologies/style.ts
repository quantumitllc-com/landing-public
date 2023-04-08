import { styled } from '@mui/material/styles'

export const Container = styled('div')`
	display: flex;
	padding-top: 136px;
	align-items: center;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			paddingTop: '40px',
		},
	})}
	.MuiTabPanel-root {
		width: 100%;
		padding: 0 18px !important;
		background: linear-gradient(180deg, #fafafa 0%, #f4f4ff 100%);
	}
`

export const WrapText = styled('div')`
	padding: 20px 0 27px;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			paddingTop: '10px',
		},
	})}
`

export const Wrap = styled('div')`
	width: 100%;
	display: flex;
	margin: 0 auto;
	align-items: center;
	padding-bottom: 71px;
	flex-direction: column;
	justify-content: space-between;
	max-width: ${({ theme }) => theme.breakpoints.values.lg}px;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			paddingBottom: '24px',
		},
	})}
	.MuiTabs-root, .MuiTab-root {
		min-height: 37px !important;
		${({ theme }) => ({
			[theme.breakpoints.down('sm')]: {
				minHeight: '33px !important',
			},
		})}
	}
	.MuiTabs-flexContainer {
		gap: 12px 26px;
		flex-wrap: wrap;
		${({ theme }) => ({
			[theme.breakpoints.down('sm')]: {
				gap: '12px',
			},
		})}
	}
	.MuiTab-root {
		display: flex;
		font-size: 16px;
		font-weight: 500;
		border-radius: 4px;
		text-align: center;
		align-items: center;
		line-height: 157.7%;
		padding: 0 12px !important;
		text-transform: capitalize;
		width: fit-content !important;
		min-width: fit-content !important;
		max-width: fit-content !important;
		background-color: #ffffff !important;
		color: ${({ theme }) => theme.palette.colors.BLUE40};
		border: 1px solid ${({ theme }) => theme.palette.colors.BLUE40};
		${({ theme }) => ({
			[theme.breakpoints.down('sm')]: {
				fontSize: '13px',
			},
		})}
	}
	.Mui-selected {
		border: none;
		font-weight: 600 !important;
		color: ${({ theme }) => theme.palette.colors.BLUE40} !important;
		background-color: ${({ theme }) => theme.palette.colors.GREEN} !important;
	}
`

export const WrapTabPanel = styled('div')`
	width: 100%;
	display: flex;
	padding: 60px 0 20px;
	justify-content: center;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '20px 0 10px',
		},
	})}
`

export const WrapTabPanelTexts = styled('div')`
	gap: 15px;
	display: flex;
	padding: 0 18px;
	max-width: 620px;
	align-items: center;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gap: '7px',
		},
	})}
`
