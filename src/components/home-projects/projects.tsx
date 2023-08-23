import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getProjects } from '@/pages/api'
import { useTranslation } from 'next-i18next'
import { useQuery } from '@tanstack/react-query'
import { IconArrow } from '@/assets/icons/arrow'
import type { IProject } from '@/types/respones'
import { Button, Typography } from '@mui/material'
import { IconChevron } from '@/assets/icons/chevron'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { Wrapper, WrapImage, Container, WrapCardTexts, WrapIconChevron } from './style'

export const HomeProjects = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { data = [] } = useQuery<IProject[]>({
		queryKey: [REACT_QUERY_KEYS.PROJECTS, locale],
		queryFn: () => getProjects(locale),
	})

	return (
		<Container>
			<Typography component='h4' align='center' variant='title50' textTransform='capitalize'>
				{t('our_latest_project')}
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
			<Wrapper length={data.filter(project => project.in_home_page).length}>
				{data
					.filter(project => project.in_home_page)
					.splice(0, 6)
					.map(project => (
						<div key={project.id}>
							<WrapCardTexts>
								<Typography align='center' variant='title100' component='h3'>
									{project.title}
								</Typography>
								<Button
									size='small'
									component={Link}
									href={`projects/${project.id}`}
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
								<Image fill src={project.image} alt={project.title} />
							</WrapImage>
						</div>
					))}
			</Wrapper>
		</Container>
	)
}
