import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { getProject } from '@/pages/api'
import { useTranslation } from 'next-i18next'
import { useQuery } from '@tanstack/react-query'
import type { IProject } from '@/types/respones'
import { IconChevron } from '@/assets/icons/chevron'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import {
	Body,
	Contents,
	Wrapper,
	Container,
	Languages,
	WrapContent,
	WrapBreadcrumb,
	WrapIconChevron,
} from './style'

export const Project = () => {
	const { locale, query, ...router } = useRouter()
	const id = query?.projectId as string
	const { t } = useTranslation('common')
	const { data } = useQuery<IProject>({
		queryKey: [REACT_QUERY_KEYS.PROJECT, locale, id],
		queryFn: () => getProject(id, locale),
	})

	if (typeof data === 'undefined' && typeof window !== 'undefined') {
		router.push('/404')
		return null
	}

	const breadcrumbs = [
		<Link key='1' href='/'>
			<Typography variant='title130' color='colors.GRAY210'>
				{t('home')}
			</Typography>
		</Link>,
		<Typography key='3' variant='title130'>
			{data?.title}
		</Typography>,
	]

	return (
		<>
			<NextSeo
				title={data?.title}
				description={data?.description}
				openGraph={{
					title: data?.title,
					description: data?.description,
					images: [{ url: data?.main_image as string, alt: data?.title }],
				}}
			/>
			<Container data-aos='fade-up' data-aos-duration='2000'>
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
					<Body>
						<Typography variant='title140' component='h2'>
							{data?.title}
						</Typography>
						<Typography variant='text100' component='p'>
							{data?.description}
						</Typography>
					</Body>
					<Box>
						<Typography variant='title120' component='h3'>
							{t('used_languages')}
						</Typography>
						<Languages>
							{data?.languages.map(language => (
								<div key={language.id} className='language'>
									<Typography variant='text110' component='span'>
										#{language.name}
									</Typography>
								</div>
							))}
						</Languages>
					</Box>
					<Contents>
						{data?.contents.map(c => (
							<WrapContent key={c.id}>
								{c.is_right_position ? (
									<>
										<div dangerouslySetInnerHTML={{ __html: c.content }} />
										{c.image && <Image fill alt={String(c.id)} src={c.image} />}
									</>
								) : (
									<>
										{c.image && <Image fill alt={String(c.id)} src={c.image} />}
										<div dangerouslySetInnerHTML={{ __html: c.content }} />
									</>
								)}
							</WrapContent>
						))}
					</Contents>
				</Wrapper>
			</Container>
		</>
	)
}
