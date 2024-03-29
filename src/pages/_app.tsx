import Aos from 'aos'
import Head from 'next/head'
import { Layout } from '@/layout'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { gilroy } from '@/utility/fonts'
import type { AppProps } from 'next/app'
import { theme } from '@/config/material'
import { ILocales } from '@/types/locales'
import { useEffect, useState } from 'react'
import NextNProgress from 'nextjs-progressbar'
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next'
import { HTML_LOCALES } from '@/constants/languages'
import { queryClientConfig } from '@/utility/react-query'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { ErrorBoundary } from '@/components/error-boundary'
import { DefaultSeo, type DefaultSeoProps } from 'next-seo'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from '@/utility/createEmotionCache'
import { Hydrate, QueryClient, QueryClientProvider } from '@tanstack/react-query'

import 'react-toastify/dist/ReactToastify.css'
import 'keen-slider/keen-slider.min.css'
import '@/styles/globals.css'
import 'aos/dist/aos.css'

interface NewAppProps extends AppProps {
	Component: NextPage
	emotionCache?: EmotionCache
}

const clientSideEmotionCache = createEmotionCache()

const url = process.env.NEXT_PUBLIC_BASE_URL as string
const siteName = 'Quantum IT Solutions'
const title = 'Enterprise Software Development Company'
const description =
	'Quantum IT Solutions is a global software engineering company that delivers digital transformation and builds novel IT products.'
const image = '/favicon.ico'
const keywords = ['Quantum', 'IT', 'Solutions']

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: NewAppProps) => {
	const { locale } = useRouter()
	const [queryClient] = useState(() => new QueryClient(queryClientConfig))

	const DEFAULT_SEO: DefaultSeoProps = {
		title,
		description,
		canonical: url,
		titleTemplate: `%s |  ${siteName}`,
		openGraph: {
			url,
			title,
			siteName,
			description,
			type: 'website',
			locale: HTML_LOCALES[locale as ILocales],
			images: [{ url: image, alt: siteName }],
		},
		twitter: {
			handle: '@handle',
			site: '@site',
			cardType: 'summary_large_image',
		},
		additionalMetaTags: [
			{ name: 'keywords', content: keywords.join(',') },
			{
				name: 'msapplication-confi',
				content: '/browserconfig.xml',
			},
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
		],
		additionalLinkTags: [
			{
				rel: 'mask-icon',
				href: '/safari-pinned-tab.svg',
				color: '#5bbad5',
			},
			{
				rel: 'manifest',
				href: '/site.webmanifest',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '16x16',
				href: '/favicon-16x16.png',
			},
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '32x32',
				href: '/favicon-32x32.png',
			},
			{
				rel: 'apple-touch-icon',
				sizes: '180x180',
				href: '/apple-touch-icon.png',
			},
			{
				rel: 'canonical',
				href: url,
			},
		],
		robotsProps: {
			nosnippet: true,
			notranslate: true,
			noimageindex: true,
			noarchive: true,
			maxSnippet: -1,
			maxImagePreview: 'none',
			maxVideoPreview: -1,
		},
		languageAlternates: [
			{
				hrefLang: HTML_LOCALES.en,
				href: url,
			},
			{
				hrefLang: HTML_LOCALES.ru,
				href: `${url}/ru`,
			},
		],
	}

	useEffect(() => {
		Aos.init({
			easing: 'ease-out-quad',
			duration: 1000,
		})
	}, [])

	return (
		<>
			<NextNProgress
				color={theme.palette.colors.GREEN}
				options={{
					showSpinner: false,
				}}
			/>
			<Head>
				<script src='//code.jivosite.com/widget/ShuWU2A1gc' async></script>
			</Head>
			<DefaultSeo {...DEFAULT_SEO} />
			<ThemeProvider theme={theme}>
				<style jsx global>{`
					:root {
						--font-gilroy: ${gilroy.style.fontFamily};
					}
					body {
						background-color: ${theme.palette.colors.BLUE};
					}
				`}</style>
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
