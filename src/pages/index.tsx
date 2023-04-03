import { Box } from '@mui/material'
import { Tools } from '@/components/tools'
import type { GetServerSideProps } from 'next'
import { AboutUs } from '@/components/about-us'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { Companies } from '@/components/companies'
import { HomeBanner } from '@/components/home-banner'
import { Testimonials } from '@/components/testimonials'
import { QuantumBanner } from '@/components/quantum-banner'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { getAbout, getCompanies, getIntro, getProjects, getServices, getVideo } from '@/pages/api'

const Home = () => {
	return (
		<>
			<HomeBanner />
			<Companies />
			<QuantumBanner />
			<Box id='services'>
				<Services />
			</Box>
			<Box id='projects'>
				<Projects />
			</Box>
			<Box id='about-us'>
				<AboutUs />
			</Box>
			<Box id='tools'>
				<Tools />
			</Box>
			<Box id='testimonials'>
				<Testimonials />
			</Box>
		</>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	const queryClient = new QueryClient()
	await Promise.allSettled([
		queryClient.prefetchQuery([REACT_QUERY_KEYS.SERVICES], getServices),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.ABOUT], getAbout),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.COMPANIES], getCompanies),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.INTRO], getIntro),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.PROJECTS], getProjects),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.VIDEO], getVideo),
	])

	return {
		props: {
			title: 'Home',
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale as string, ['common'])),
		},
	}
}
