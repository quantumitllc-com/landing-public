import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { getProjects } from '@/pages/api'
import { useQuery } from '@tanstack/react-query'
import { IconArrow } from '@/assets/icons/arrow'
import type { IProject } from '@/types/respones'
import { Button, Typography } from '@mui/material'
import { IconChevron } from '@/assets/icons/chevron'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { Wrapper, WrapText, WrapImage, Container, WrapCardTexts, WrapIconChevron } from './style'

export const Projects = () => {
	const { locale } = useRouter()
	const { data = [] } = useQuery<IProject[]>({
		queryKey: [REACT_QUERY_KEYS.PROJECTS, locale],
		queryFn: () => getProjects(locale),
	})

	return (
		<Container>
			<Typography variant='title30' component='h3' align='center'>
				OUR LATEST PROJECT
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
					Our latest project is the result of the hard work of designers
				</Typography>
			</WrapText>
			<Typography
				component='p'
				align='center'
				variant='text50'
				sx={{
					maxWidth: '750px',
					padding: '0 18px',
				}}
			>
				Projects that are carried out professionally, with collaboration between divisions, produce
				projects that are ready to use, with great designs and details
			</Typography>
			<Wrapper>
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
								Learn More
							</Button>
						</WrapCardTexts>
						<WrapImage>
							<Image fill src={project.image} alt={project.title} />
						</WrapImage>
					</div>
				))}
			</Wrapper>
			<Button
				href='projects'
				size='medium'
				component={Link}
				variant='contained'
				endIcon={<IconArrow />}
				style={{ minWidth: '128px' }}
			>
				See All
			</Button>
		</Container>
	)
}
