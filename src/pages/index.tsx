import Box from '@mui/material/Box'
import { Main } from '@/components/main'
import type { GetServerSideProps } from 'next'
import { AboutUs } from '@/components/about-us'
import { Services } from '@/components/services'
import { Companies } from '@/components/companies'
import { Testimonials } from '@/components/testimonials'
import { Technologies } from '@/components/technologies'
import { HomeProjects } from '@/components/home-projects'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import {
	getVideo,
	getIntro,
	getProjects,
	getServices,
	getCompanies,
	getTechnologies,
	getTestimonials,
	getContactInformation,
	getAchievements,
} from '@/pages/api'

const Home = () => {
	return (
		<>
			<Main />
			<Companies />
			<Box id='services'>
				<Services />
			</Box>
			<Box id='about-us'>
				<AboutUs />
			</Box>
			<Box id='projects'>
				<HomeProjects />
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
		queryClient.prefetchQuery([REACT_QUERY_KEYS.ACHIEVEMENTS, locale], () =>
			getAchievements(locale),
		),
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
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale as string, ['common'])),
		},
	}
}
