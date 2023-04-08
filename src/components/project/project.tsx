import Image from 'next/image'
import { useRouter } from 'next/router'
import { getProject } from '@/pages/api'
import { Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import type { IProject } from '@/types/respones'
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
} from './style'

export const Project = () => {
	const { locale, query } = useRouter()
	const id = query?.projectId as string
	const { data = { text: '', image: '', title: '', location: '', date: '' } } = useQuery<IProject>({
		queryKey: [REACT_QUERY_KEYS.PROJECT, locale, id],
		queryFn: () => getProject(id, locale),
	})
	console.log(data)
	return (
		<Container>
			<Wrapper>
				<Header>
					<Left>
						<WrapImage>
							<Image fill src={`http://zmlsoft.com${data.image}`} alt={data.title} />
						</WrapImage>
					</Left>
					<Right>
						<WrapTitle>
							<Typography variant='title110' component='h3'>
								Project Details
							</Typography>
						</WrapTitle>
						<Typography variant='text90' component='p'>
							Lorem ipsum dolor sit amet consectetur. Amet euismod quam fringilla leo eget duis id
							odio. Posuere pulvinar dis diam mauris consequat senectus diam enim. Libero risus
							condimentum.
						</Typography>
					</Right>
				</Header>
				<Body>
					<Typography variant='title10' component='h2'>
						{data.title}
					</Typography>
					<Typography variant='text100' component='p'>
						{data.text}
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
						<Image fill src={`http://zmlsoft.com${data.image}`} alt={data.title} />
					</div>
					<div>
						<Image fill src={`http://zmlsoft.com${data.image}`} alt={data.title} />
					</div>
					<div>
						<Image fill src={`http://zmlsoft.com${data.image}`} alt={data.title} />
					</div>
				</WrapImages>
			</Wrapper>
		</Container>
	)
}
