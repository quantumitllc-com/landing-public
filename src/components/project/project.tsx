import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getProject } from '@/pages/api'
import { useTranslation } from 'next-i18next'
import { useQuery } from '@tanstack/react-query'
import type { IProject } from '@/types/respones'
import { IconChevron } from '@/assets/icons/chevron'
import { Breadcrumbs, Typography } from '@mui/material'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { CardProjectDetails } from '@/components/card-project-details'
import {
	Left,
	Body,
	Header,
	Wrapper,
	WrapImage,
	Container,
	Languages,
	WrapImages,
	WrapLanguage,
	WrapBreadcrumb,
	WrapIconChevron,
	WrapMobileProjectDetail,
	WrapDesktopProjectDetail,
} from './style'

const baseURL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL

export const Project = () => {
	const { locale, query } = useRouter()
	const id = query?.projectId as string
	const { t } = useTranslation('common')
	const { data } = useQuery<IProject>({
		queryKey: [REACT_QUERY_KEYS.PROJECT, locale, id],
		queryFn: () => getProject(id, locale),
	})

	const breadcrumbs = [
		<Link key='1' href='/'>
			<Typography variant='title130' color='colors.GRAY210'>
				{t('home')}
			</Typography>
		</Link>,
		<Link key='2' href='/projects'>
			<Typography variant='title130' color='colors.GRAY210'>
				{t('projects')}
			</Typography>
		</Link>,
		<Typography key='3' variant='title130'>
			{data?.title}
		</Typography>,
	]

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
				<Header>
					<Left>
						<WrapImage>
							<Image fill alt={data?.title as string} src={`${baseURL}${data?.image as string}`} />
						</WrapImage>
					</Left>
					<WrapDesktopProjectDetail>
						<CardProjectDetails
							date={data?.date}
							subtitle={data?.subtitle}
							location={data?.location}
							clientName={data?.client?.name}
							serviceTitle={data?.service?.title}
						/>
					</WrapDesktopProjectDetail>
				</Header>
				<Body>
					<Typography variant='title140' component='h2'>
						{data?.title}
					</Typography>
					<Typography variant='text100' component='p'>
						{data?.text}
					</Typography>
				</Body>
				<WrapLanguage>
					<Typography variant='title120' component='h3'>
						{t('used_languages')}
					</Typography>
					<Languages>
						{data?.languages.map(language => (
							<div key={language.id} className='language'>
								<Typography variant='text110' component='span'>
									{language.name}
								</Typography>
							</div>
						))}
					</Languages>
				</WrapLanguage>
				<WrapImages>
					{data?.project_images.map(project_image => (
						<div key={project_image.id}>
							<Image
								fill
								alt={String(project_image.id)}
								src={`${baseURL}${project_image.image as string}`}
							/>
						</div>
					))}
				</WrapImages>
				<WrapMobileProjectDetail>
					<CardProjectDetails
						date={data?.date}
						subtitle={data?.subtitle}
						location={data?.location}
						clientName={data?.client?.name}
						serviceTitle={data?.service?.title}
					/>
				</WrapMobileProjectDetail>
			</Wrapper>
		</Container>
	)
}
