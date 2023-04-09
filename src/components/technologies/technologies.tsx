import { useRouter } from 'next/router'
import { getTechnologies } from '@/pages/api'
import { useTranslation } from 'next-i18next'
import { Tab, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { SyntheticEvent, useState } from 'react'
import type { ITechnology } from '@/types/respones'
import { IconEllipse } from '@/assets/icons/ellipse'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
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
				{data.map((technology: ITechnology) => (
					<TabPanel key={technology.id} value={String(technology.id)}>
						<WrapTabPanel>
							<WrapCircle className='wrap-circle-1'>
								<div className='circle'>
									<div className='icon'>
										<IconEllipse />
									</div>
									<div className='content'>
										<WrapTechnologies className='technologies'>
											<Technology />
											<Technology />
											<Technology />
										</WrapTechnologies>
									</div>
								</div>
							</WrapCircle>
							<WrapCircle className='wrap-circle-2'>
								<div className='circle'>
									<div className='icon'>
										<IconEllipse />
									</div>
									<div className='content'>
										<WrapTechnologies className='technologies'>
											<Technology />
											<Technology />
											<Technology />
										</WrapTechnologies>
									</div>
								</div>
							</WrapCircle>
							<WrapCircle className='wrap-circle-3'>
								<div className='circle'>
									<div className='icon'>
										<IconEllipse />
									</div>
									<div className='content'>
										<WrapTechnologies className='technologies'>
											<Technology />
											<Technology />
											<Technology />
										</WrapTechnologies>
									</div>
								</div>
							</WrapCircle>
							<WrapCircle className='wrap-circle-4'>
								<div className='circle'>
									<div className='icon'>
										<IconEllipse />
									</div>
									<div className='content'>
										<WrapTechnologies className='technologies'>
											<Technology />
											<Technology />
											<Technology />
										</WrapTechnologies>
									</div>
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
				))}
			</TabContext>
		</Container>
	)
}
