import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getProjects } from '@/pages/api'
import { IProject } from '@/types/respones'
import { useTranslation } from 'next-i18next'
import { useQuery } from '@tanstack/react-query'
import { IconChevron } from '@/assets/icons/chevron'
import { Breadcrumbs, Button, Typography } from '@mui/material'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import {
	Wrapper,
	WrapImage,
	WrapCards,
	Container,
	WrapCardTexts,
	WrapBreadcrumb,
	WrapIconChevron,
} from './style'

export const Projects = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { data = [] } = useQuery<IProject[]>({
		queryKey: [REACT_QUERY_KEYS.PROJECTS, locale],
		queryFn: () => getProjects(locale),
	})

	const breadcrumbs = [
		<Link key='1' href='/'>
			<Typography variant='title130' color='colors.GRAY210'>
				{t('home')}
			</Typography>
		</Link>,
		<Typography key='2' variant='title130'>
			{t('projects')}
		</Typography>,
	]

	console.log(data)
	return (
		<Container>
			<Wrapper>
				<WrapBreadcrumb>
					<Breadcrumbs
						aria-label='breadcrumb'
						separator={
							<WrapIconChevron>
								<IconChevron />
							</WrapIconChevron>
						}
					>
						{breadcrumbs}
					</Breadcrumbs>
				</WrapBreadcrumb>
				<WrapCards>
					{data.map(project => (
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
				</WrapCards>
			</Wrapper>
		</Container>
	)
}
