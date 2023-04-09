import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getProject } from '@/pages/api'
import { useQuery } from '@tanstack/react-query'
import type { IProject } from '@/types/respones'
import { IconChevron } from '@/assets/icons/chevron'
import { Box, Breadcrumbs, Typography } from '@mui/material'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import {
	Left,
	Body,
	Right,
	Header,
	Wrapper,
	WrapTitle,
	WrapImage,
	Container,
	Languages,
	WrapImages,
	WrapBreadcrumb,
	WrapIconChevron,
} from './style'

const baseURL = process.env.NEXT_PUBLIC_IMAGE_BASE_URL

export const Project = () => {
	const { locale, query } = useRouter()
	const id = query?.projectId as string
	const { data } = useQuery<IProject>({
		queryKey: [REACT_QUERY_KEYS.PROJECT, locale, id],
		queryFn: () => getProject(id, locale),
	})

	const breadcrumbs = [
		<Link key='1' href='/'>
			<Typography variant='title130' color='colors.GRAY210'>
				Home
			</Typography>
		</Link>,
		<Link key='2' href='/projects'>
			<Typography variant='title130' color='colors.GRAY210'>
				Projects
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
					<Right>
						<WrapTitle>
							<Typography variant='title110' component='h3'>
								Project Details
							</Typography>
						</WrapTitle>
						<Typography variant='text90' component='p'>
							{data?.subtitle}
						</Typography>
						<Box mt='20px' gap='14px' display='flex' flexDirection='column'>
							{data?.client?.name && (
								<Box gap='10px' display='flex' alignItems='center'>
									<Typography variant='text120' component='h5'>
										Client
									</Typography>
									<Box display='flex' flexGrow={1} alignItems='center' justifyContent='flex-end'>
										<Typography variant='text130' component='h6'>
											{data?.client?.name}
										</Typography>
									</Box>
								</Box>
							)}
							{data?.date && (
								<Box gap='10px' display='flex' alignItems='center'>
									<Typography variant='text120' component='h5'>
										Date
									</Typography>
									<Box display='flex' flexGrow={1} alignItems='center' justifyContent='flex-end'>
										<Typography variant='text130' component='h6'>
											{data?.date}
										</Typography>
									</Box>
								</Box>
							)}
							{data?.location && (
								<Box gap='10px' display='flex' alignItems='center'>
									<Typography variant='text120' component='h5'>
										Location
									</Typography>
									<Box display='flex' flexGrow={1} alignItems='center' justifyContent='flex-end'>
										<Typography variant='text130' component='h6'>
											{data?.location}
										</Typography>
									</Box>
								</Box>
							)}
							{data?.service?.title && (
								<Box gap='10px' display='flex' alignItems='center'>
									<Typography variant='text120' component='h5'>
										Category
									</Typography>
									<Box display='flex' flexGrow={1} alignItems='center' justifyContent='flex-end'>
										<Typography variant='text130' component='h6'>
											{data?.service.title}
										</Typography>
									</Box>
								</Box>
							)}
						</Box>
					</Right>
				</Header>
				<Body>
					<Typography variant='title10' component='h2'>
						{data?.title}
					</Typography>
					<Typography variant='text100' component='p'>
						{data?.text}
					</Typography>
				</Body>
				<Typography variant='title120' component='h3'>
					Used languages
				</Typography>
				<Languages>
					<div className='language'>
						<Typography variant='text110' component='span'>
							#React
						</Typography>
					</div>
				</Languages>
				<WrapImages>
					<div>
						<Image fill alt={data?.title as string} src={`${baseURL}${data?.image as string}`} />
					</div>
					<div>
						<Image fill alt={data?.title as string} src={`${baseURL}${data?.image as string}`} />
					</div>
					<div>
						<Image fill alt={data?.title as string} src={`${baseURL}${data?.image as string}`} />
					</div>
				</WrapImages>
			</Wrapper>
		</Container>
	)
}
