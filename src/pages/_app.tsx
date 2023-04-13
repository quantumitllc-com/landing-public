import Head from 'next/head'
import { useState } from 'react'
import { Layout } from '@/layout'
import type { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { gilroy } from '@/utility/fonts'
import type { AppProps } from 'next/app'
import { theme } from '@/config/material'
import { ILocales } from '@/types/locales'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next'
import { HTML_LOCALES } from '@/constants/languages'
import { queryClientConfig } from '@/utility/react-query'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { ErrorBoundary } from '@/components/error-boundary'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from '@/utility/createEmotionCache'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'react-toastify/dist/ReactToastify.css'
import 'keen-slider/keen-slider.min.css'
import '@/styles/globals.css'

interface NewAppProps extends AppProps {
	Component: NextPage
	emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: NewAppProps) => {
	const router = useRouter()
	const [queryClient] = useState(() => new QueryClient(queryClientConfig))

	return (
		<>
			<NextNProgress
				color={theme.palette.colors.GREEN}
				options={{
					showSpinner: false,
				}}
			/>
			<Head>
				{/* <DefaultSeo
					canonical='https://quantumitllc.com'
					openGraph={{
						locale: HTML_LOCALES[router.locale as ILocales] ?? HTML_LOCALES.en,
						type: 'website',
						url: 'https://quantumitllc.com',
						title: 'Enterprise Software Development Company | Quantum IT Solutions',
						description:
							'Quantum IT Solutions is a global software engineering company that delivers digital transformation and builds novel IT products.',
						site_name: 'Quantumitllc.com',
						images: [
							{
								url: '/icon.png',
								alt: 'Quantum IT Solutions',
							},
						],
					}}
					twitter={{
						handle: '@handle',
						site: '@site',
						cardType: 'summary_large_image',
					}}
				/> */}
				<DefaultSeo
					openGraph={{
						title: 'TSS',
						type: 'website',
						locale: 'en_IE',
						url: 'http://zmltss.com/',
						site_name: 'TSS',
						description: 'Trailer security system is a solution',
						images: [
							{
								url: '/images/trucks.png',
								type: 'png',
								alt: 'Trucks',
							},
						],
					}}
					twitter={{
						handle: '@handle',
						site: '@site',
						cardType: 'summary_large_image',
					}}
				/>
				<title>Enterprise Software Development Company | Quantum IT Solutions</title>
				<meta
					name='description'
					content='Quantum IT Solutions is a global software engineering company that delivers digital transformation and builds novel IT products.'
				/>
				<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
				<meta name='hostname' content='quantumitllc.com' />
				<link rel='canonical' href='https://quantumitllc.com' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' type='image/svg+xml' href='/icon.svg' />
				<link rel='icon' type='image/png' href='/icon.png' />
			</Head>
			<style jsx global>{`
				:root {
					--font-gilroy: ${gilroy.style.fontFamily};
				}
			`}</style>
			<ThemeProvider theme={theme}>
				<ErrorBoundary>
					<QueryClientProvider client={queryClient}>
						<Hydrate state={pageProps.dehydratedState}>
							<CacheProvider value={emotionCache}>
								<Layout {...pageProps}>
									<CssBaseline />
									<ToastContainer />
									<Component {...pageProps} />
								</Layout>
							</CacheProvider>
						</Hydrate>
					</QueryClientProvider>
				</ErrorBoundary>
			</ThemeProvider>
		</>
	)
}

export default appWithTranslation(App)
