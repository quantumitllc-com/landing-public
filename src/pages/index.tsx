import { Box } from '@mui/material'
import { Tools } from '@/components/tools'
import type { GetServerSideProps } from 'next'
import { AboutUs } from '@/components/about-us'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { ContactUs } from '@/components/contact-us'
import { HomeBanner } from '@/components/home-banner'
import { Testimonials } from '@/components/testimonials'
import { QuantumBanner } from '@/components/quantum-banner'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
	return (
		<>
			<HomeBanner />
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
			<ContactUs variant='touch' />
		</>
	)
}

export default Home

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	return {
		props: {
			title: 'Home',
			...(await serverSideTranslations(locale as string, ['common'])),
		},
	}
}
