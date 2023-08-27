import { getProject } from '@/pages/api'
import type { GetStaticProps } from 'next'
import { Project } from '@/components/project'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const ProjectDetail = () => <Project />

export default ProjectDetail

export const getServerSideProps: GetStaticProps = async ({ params, locale }) => {
	const id = params?.projectId as string
	const queryClient = new QueryClient()
	await queryClient.prefetchQuery([REACT_QUERY_KEYS.PROJECT, locale, id], () =>
		getProject(id, locale),
	)

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale as string, ['common'])),
		},
	}
}
