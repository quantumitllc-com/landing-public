import { useRouter } from 'next/router'
import { getTechnologies } from '@/pages/api'
import { Tab, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { SyntheticEvent, useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { Wrap, WrapText, Container, WrapTabPanel, WrapTabPanelTexts } from './style'

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
