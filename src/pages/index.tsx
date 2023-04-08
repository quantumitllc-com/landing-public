import { Box } from '@mui/material'
import type { GetServerSideProps } from 'next'
import { AboutUs } from '@/components/about-us'
import { Projects } from '@/components/projects'
import { Services } from '@/components/services'
import { Companies } from '@/components/companies'
import { HomeBanner } from '@/components/home-banner'
import { Testimonials } from '@/components/testimonials'
import { Technologies } from '@/components/technologies'
import { QuantumBanner } from '@/components/quantum-banner'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
	getVideo,
	getIntro,
	getAbout,
	getProjects,
	getServices,
	getCompanies,
	getTestimonials,
	getTechnologies,
	getContactInformation,
} from '@/pages/api'

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
				<Technologies />
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
		queryClient.prefetchQuery([REACT_QUERY_KEYS.VIDEO], getVideo),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.SERVICES, locale], () => getServices(locale)),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.ABOUT, locale], () => getAbout(locale)),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.COMPANIES, locale], () => getCompanies(locale)),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.INTRO, locale], () => getIntro(locale)),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.PROJECTS, locale], () => getProjects(locale)),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.TECHNOLOGIES, locale], () =>
			getTechnologies(locale),
		),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.TESTIMONIALS, locale], () =>
			getTestimonials(locale),
		),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.CONTACTINFORMATION, locale], () =>
			getContactInformation(locale),
		),
	])

	return {
		props: {
			title: 'Home',
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale as string, ['common'])),
		},
	}
}
