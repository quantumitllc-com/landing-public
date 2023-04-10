import { WrapTitle, Container } from './style'
import { useTranslation } from 'next-i18next'
import { Box, Typography } from '@mui/material'

interface ICardProject {
	date: string
	subtitle: string
	location: string
	clientName: string
	serviceTitle: string
}

export const CardProjectDetails = ({
	date,
	subtitle,
	location,
	clientName,
	serviceTitle,
}: Partial<ICardProject>) => {
	const { t } = useTranslation('common')

	return (
		<Container>
			<WrapTitle>
				<Typography variant='title110' component='h3'>
					{t('project_details')}
				</Typography>
			</WrapTitle>
			<Typography variant='text90' component='p'>
				{subtitle}
			</Typography>
			<Box mt='20px' gap='14px' display='flex' flexDirection='column'>
				<Box gap='10px' display='flex' alignItems='center'>
					<Typography variant='text120' component='h5'>
						{t('client')}
					</Typography>
					<Box display='flex' flexGrow={1} alignItems='center' justifyContent='flex-end'>
						<Typography variant='text130' component='h6'>
							{clientName}
						</Typography>
					</Box>
				</Box>
				<Box gap='10px' display='flex' alignItems='center'>
					<Typography variant='text120' component='h5'>
						{t('date')}
					</Typography>
					<Box display='flex' flexGrow={1} alignItems='center' justifyContent='flex-end'>
						<Typography variant='text130' component='h6'>
							{date}
						</Typography>
					</Box>
				</Box>
				<Box gap='10px' display='flex' alignItems='center'>
					<Typography variant='text120' component='h5'>
						{t('location')}
					</Typography>
					<Box display='flex' flexGrow={1} alignItems='center' justifyContent='flex-end'>
						<Typography variant='text130' component='h6'>
							{location}
						</Typography>
					</Box>
				</Box>
				<Box gap='10px' display='flex' alignItems='center'>
					<Typography variant='text120' component='h5'>
						{t('category')}
					</Typography>
					<Box display='flex' flexGrow={1} alignItems='center' justifyContent='flex-end'>
						<Typography variant='text130' component='h6'>
							{serviceTitle}
						</Typography>
					</Box>
				</Box>
			</Box>
		</Container>
	)
}
