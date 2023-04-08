import { useRouter } from 'next/router'
import { getTechnologies } from '@/pages/api'
import { Tab, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { SyntheticEvent, useState } from 'react'
import { IconEllipse } from '@/assets/icons/ellipse'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import {
	Wrap,
	Circle1,
	Circle2,
	Circle3,
	Circle4,
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
	const { data = [] } = useQuery({
		queryKey: [REACT_QUERY_KEYS.TECHNOLOGIES, locale],
		queryFn: () => getTechnologies(locale),
	})

	const [value, setValue] = useState(String(data[0]?.id))

	const handleChange = (_: SyntheticEvent, newValue: string) => {
		setValue(newValue)
	}
	console.log(data)

	return (
		<Container>
			<Typography variant='title30' component='h3' align='center'>
				tools we use
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
					Let your projects take advantage of the latest technologies
				</Typography>
			</WrapText>
			<TabContext value={value}>
				<Wrap>
					<TabList
						onChange={handleChange}
						aria-label='TECHNOLOGIES'
						TabIndicatorProps={{ sx: { display: 'none' } }}
					>
						{data.map((technology: any) => (
							<Tab key={technology?.id} label={technology?.name} value={String(technology?.id)} />
						))}
					</TabList>
				</Wrap>
				{data.map((technology: any) => (
					<TabPanel key={technology?.id} value={String(technology?.id)}>
						<WrapTabPanel>
							<WrapCircle className='wrap-circle-1'>
								<Circle1 className='circle'>
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
								</Circle1>
							</WrapCircle>
							<WrapCircle className='wrap-circle-2'>
								<Circle2 className='circle'>
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
								</Circle2>
							</WrapCircle>
							<WrapCircle className='wrap-circle-3'>
								<Circle3 className='circle'>
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
								</Circle3>
							</WrapCircle>
							<WrapCircle className='wrap-circle-4'>
								<Circle4 className='circle'>
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
								</Circle4>
							</WrapCircle>
							<WrapTabPanelTexts>
								<Typography align='center' variant='title90' component='h4'>
									{technology?.name}
								</Typography>
								<Typography align='center' variant='text80' component='h5'>
									{technology?.text}
								</Typography>
							</WrapTabPanelTexts>
						</WrapTabPanel>
					</TabPanel>
				))}
			</TabContext>
		</Container>
	)
}
