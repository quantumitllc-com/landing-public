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
		padding: 0 0 !important;
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

export const WrapTabPanelTexts = styled('div')`
	gap: 15px;
	z-index: 11;
	display: flex;
	max-width: 620px;
	position: absolute;
	align-items: center;
	padding: 60px 18px 0;
	flex-direction: column;
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			gap: '7px',
			padding: '0 18px 0',
		},
	})}
`

export const WrapTabPanel = styled('div')`
	width: 100%;
	display: flex;
	margin: 0 auto;
	overflow: hidden;
	min-height: 745px;
	position: relative;
	justify-content: center;

	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			padding: '20px 0 10px',
			minHeight: '376px',
		},
	})}
	.wrap-circle-1 {
		z-index: 10;
		.circle {
			width: 345px;
			height: 345px;

			.technologies {
				width: calc(100% - 30px);
				height: calc(100% - 30px);
			}
			.content {
				animation-delay: 0;
			}
			${({ theme }) => ({
				[theme.breakpoints.down('sm')]: {
					width: '173px',
					height: '173px',
				},
				'.technologies': {
					width: 'calc(100% - 15px)',
					height: 'calc(100% - 15px)',
				},
			})}
		}
	}
	.wrap-circle-2 {
		z-index: 9;
		.circle {
			width: 645px;
			height: 645px;
			.technologies {
				width: calc(100% - 120px);
				height: calc(100% - 120px);
			}
			.content {
				animation-delay: 1.5s;
			}
			${({ theme }) => ({
				[theme.breakpoints.down('sm')]: {
					width: '323.2px',
					height: '323.2px',
				},
				'.technologies': {
					width: 'calc(100% - 55px)',
					height: 'calc(100% - 55px)',
				},
			})}
		}
	}
	.wrap-circle-3 {
		z-index: 8;
		.circle {
			width: 890px;
			height: 890px;
			.technologies {
				width: calc(100% - 180px);
				height: calc(100% - 180px);
			}
			.content {
				animation-delay: 0.15s;
			}
			${({ theme }) => ({
				[theme.breakpoints.down('sm')]: {
					width: '449.26px',
					height: '449.26px',
				},
				'.technologies': {
					width: 'calc(100% - 95px)',
					height: 'calc(100% - 95px)',
				},
			})}
		}
	}
	.wrap-circle-4 {
		z-index: 7;
		.circle {
			width: 1185px;
			height: 1185px;
			.technologies {
				width: calc(100% - 270px);
				height: calc(100% - 270px);
			}
			.content {
				animation-delay: 2.25s;
			}
			${({ theme }) => ({
				[theme.breakpoints.down('sm')]: {
					width: '598px',
					height: '598px',
				},
				'.technologies': {
					width: 'calc(100% - 135px)',
					height: 'calc(100% - 135px)',
				},
			})}
		}
	}
`

export const WrapCircle = styled('div')`
	height: 100%;
	display: flex;
	position: absolute;
	align-items: center;
	justify-content: center;
	.circle {
		display: flex;
		border-radius: 50%;
		position: relative;
		align-items: center;
		justify-content: center;
	}
	.icon {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		border-radius: 50%;
		position: absolute;
		svg {
			width: 100%;
			height: 100%;
		}
	}
	.content {
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: flex;
		position: absolute;
		border-radius: 50%;
		align-items: center;
		justify-content: center;
		animation: spin 15s linear infinite;
		-moz-animation: spin 15s linear infinite;
		-webkit-animation: spin 15s linear infinite;
		:hover {
			animation-play-state: paused;
		}

		@-moz-keyframes spin {
			100% {
				-moz-transform: rotate(360deg);
			}
		}

		@-webkit-keyframes spin {
			100% {
				-webkit-transform: rotate(360deg);
			}
		}

		@keyframes spin {
			100% {
				-webkit-transform: rotate(360deg);
				transform: rotate(360deg);
			}
		}
	}
`

export const WrapTechnologies = styled('div')`
	display: grid;
	border-radius: 50%;
	grid-template-rows: 1fr;
	justify-content: space-between;
	grid-template-columns: auto auto;
`

export const Technology = styled('div')`
	width: 80px;
	height: 80px;
	border-radius: 50%;
	background-color: #ffffff;
	box-shadow: 0px 25px 55px rgba(0, 0, 0, 0.1);
	${({ theme }) => ({
		[theme.breakpoints.down('sm')]: {
			width: '40px',
			height: '40px',
		},
	})}
`
