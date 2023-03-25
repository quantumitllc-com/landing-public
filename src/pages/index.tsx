import type { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const Home = () => {
	return <div>Home</div>
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
