import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getProjects } from '@/pages/api'
import { useTranslation } from 'next-i18next'
import { useQuery } from '@tanstack/react-query'
import type { IProject } from '@/types/respones'
import { IconChevron } from '@/assets/icons/chevron'
import { Box, Button, Typography } from '@mui/material'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { Wrapper, WrapImage, Container, WrapCardTexts, WrapIconChevron } from './style'

export const HomeProjects = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { data = [] } = useQuery<IProject[]>({
		queryKey: [REACT_QUERY_KEYS.PROJECTS, locale],
		queryFn: () => getProjects(locale),
	})

	if (data.length === 0) {
		return null
	}
	return (
		<Container>
			<Typography component='h4' align='center' variant='title50' textTransform='capitalize'>
				{t('our_latest_projects')}
			</Typography>
			<Typography
				component='p'
				align='center'
				variant='text50'
				sx={{
					maxWidth: '750px',
					padding: '0 18px',
				}}
			>
				{t('projects_that_are_ready_to_use_with_great_designs_and_details')}
			</Typography>
			<Wrapper length={data.length}>
				{data.map(project => (
					<Box
						key={project.id}
						data-aos='fade-up'
						data-aos-anchor-placement='top-bottom'
						component={Link}
						href={`/${project.id}`}
					>
						<WrapCardTexts>
							<Typography align='center' variant='title100' component='h3'>
								{project.title}
							</Typography>
							<Button
								size='small'
								sx={{ background: 'transparent' }}
								endIcon={
									<WrapIconChevron>
										<IconChevron />
									</WrapIconChevron>
								}
							>
								{t('learn_more')}
							</Button>
						</WrapCardTexts>
						<WrapImage>
							<Image fill src={project.main_image} alt={project.title} />
						</WrapImage>
					</Box>
				))}
			</Wrapper>
		</Container>
	)
}
