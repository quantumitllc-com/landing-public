import Link from 'next/link'
import { useRouter } from 'next/router'
import { getProjects } from '@/pages/api'
import { IProject } from '@/types/respones'
import { useQuery } from '@tanstack/react-query'
import { IconChevron } from '@/assets/icons/chevron'
import { Breadcrumbs, Typography } from '@mui/material'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { Wrapper, Container, WrapBreadcrumb, WrapIconChevron } from './style'

export const Projects = () => {
	const { locale } = useRouter()
	const { data = [] } = useQuery<IProject[]>({
		queryKey: [REACT_QUERY_KEYS.PROJECTS, locale],
		queryFn: () => getProjects(locale),
	})

	const breadcrumbs = [
		<Link key='1' href='/'>
			<Typography variant='title130' color='colors.GRAY210'>
				Home
			</Typography>
		</Link>,
		<Typography key='2' variant='title130'>
			Projects
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
			</Wrapper>
		</Container>
	)
}
