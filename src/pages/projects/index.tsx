import { getProjects } from '@/pages/api'
import type { GetServerSideProps } from 'next'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Projects = () => {
	return <div>Projects</div>
}

export default Projects

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery([REACT_QUERY_KEYS.PROJECTS, locale], () => getProjects(locale))

	return {
		props: {
			title: 'Projects',
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale as string, ['common'])),
		},
	}
}
