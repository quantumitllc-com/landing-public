import { useRouter } from 'next/router'
import { getTechnologies } from '@/pages/api'
import { useTranslation } from 'next-i18next'
import { styled } from '@mui/material/styles'
import { Tab, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { SyntheticEvent, useState } from 'react'
import type { ITechnology } from '@/types/respones'
import { IconEllipse } from '@/assets/icons/ellipse'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import MuiTooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip'
import {
	Wrap,
	WrapText,
	Container,
	Technology,
	WrapCircle,
	WrapTabPanel,
	WrapTechnologies,
	WrapTabPanelTexts,
} from './style'

const Tooltip = styled(({ className, ...props }: TooltipProps) => (
	<MuiTooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
	[`& .${tooltipClasses.tooltip}`]: {
		fontSize: '18px',
		fontWeight: 600,
		padding: '11px 20px',
		borderRadius: '10px',
		color: theme.palette.colors.WHITE,
		backgroundColor: theme.palette.colors.PURPLE,
		[theme.breakpoints.down('sm')]: {
			padding: '7px 13px',
			fontSize: '11.1969px',
			borderRadius: '6.22047px',
		},
	},
}))

export const Technologies = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { data = [] } = useQuery<ITechnology[]>({
		queryKey: [REACT_QUERY_KEYS.TECHNOLOGIES, locale],
		queryFn: () => getTechnologies(locale),
	})

	const [value, setValue] = useState(String(data[0]?.id))

	const handleChange = (_: SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}

	return (
		<Container>
			<Typography variant='title30' component='h3' align='center'>
				{t('tools_we_use')}
			</Typography>
			<WrapText>
				<Typography
					component='h4'
					align='center'
					variant='title50'
					sx={{
						maxWidth: '640px',
					}}
				>
					{t('let_your_projects_take_advantage_of_the_latest_technologies')}
				</Typography>
			</WrapText>
			<TabContext value={value}>
				<Wrap>
					<TabList
						onChange={handleChange}
						aria-label='TECHNOLOGIES'
						TabIndicatorProps={{ sx: { display: 'none' } }}
					>
						{data.map(technology => (
							<Tab key={technology.id} label={technology.name} value={String(technology.id)} />
						))}
					</TabList>
				</Wrap>
				{data.map((technology: ITechnology) => {
					const third = technology.languages.length <= 3
					const fourth = technology.languages.length > 12
					const fifth = technology.languages.length > 15

					return (
						<TabPanel key={technology.id} value={String(technology.id)}>
							<WrapTabPanel>
								<WrapCircle className='wrap-circle-1'>
									<div className='circle'>
										<div className='icon'>
											<IconEllipse />
										</div>
										<div className='content'>
											<WrapTechnologies className='technologies'>
												{technology.languages.splice(0, fifth ? 4 : 3).map(language => (
													<Tooltip key={language.id} title='Next' disableFocusListener>
														<Technology />
													</Tooltip>
												))}
											</WrapTechnologies>
										</div>
									</div>
								</WrapCircle>
								<WrapCircle className='wrap-circle-2'>
									<div className='circle'>
										<div className='icon'>
											<IconEllipse />
										</div>
										{!third && (
											<div className='content'>
												<WrapTechnologies className='technologies'>
													{technology.languages
														.splice(
															fifth ? 4 : 3,
															fifth
																? 8
																: fourth
																? 7
																: technology.languages.length < 6
																? technology.languages.length
																: 6,
														)
														.map(language => (
															<Tooltip key={language.id} title='Next' disableFocusListener>
																<Technology />
															</Tooltip>
														))}
												</WrapTechnologies>
											</div>
										)}
									</div>
								</WrapCircle>
								<WrapCircle className='wrap-circle-3'>
									<div className='circle'>
										<div className='icon'>
											<IconEllipse />
										</div>
										{!third && (
											<div className='content'>
												<WrapTechnologies className='technologies'>
													{technology.languages
														.splice(
															fifth ? 9 : 6,
															fifth
																? 13
																: fourth
																? 10
																: technology.languages.length < 9
																? technology.languages.length
																: 9,
														)
														.map(language => (
															<Tooltip key={language.id} title='Next' disableFocusListener>
																<Technology />
															</Tooltip>
														))}
												</WrapTechnologies>
											</div>
										)}
									</div>
								</WrapCircle>
								<WrapCircle className='wrap-circle-4'>
									<div className='circle'>
										<div className='icon'>
											<IconEllipse />
										</div>
										{!third && (
											<div className='content'>
												{technology.languages
													.splice(
														fifth ? 14 : 9,
														fifth
															? 18
															: fourth
															? 13
															: technology.languages.length < 12
															? technology.languages.length
															: 12,
													)
													.map(language => (
														<Tooltip key={language.id} title='Next' disableFocusListener>
															<Technology />
														</Tooltip>
													))}
											</div>
										)}
									</div>
								</WrapCircle>
								<WrapTabPanelTexts>
									<Typography align='center' variant='title90' component='h4'>
										{technology.name}
									</Typography>
									<Typography align='center' variant='text80' component='h5'>
										{technology.text}
									</Typography>
								</WrapTabPanelTexts>
							</WrapTabPanel>
						</TabPanel>
					)
				})}
			</TabContext>
		</Container>
	)
}
