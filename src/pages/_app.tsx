import Head from 'next/head'
import { useState } from 'react'
import { Layout } from '@/layout'
import type { NextPage } from 'next'
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
import { DefaultSeo, type DefaultSeoProps } from 'next-seo'
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

const url = process.env.NEXT_PUBLIC_BASE_URL as string
const siteName = 'Quantum IT Solutions'
const title = 'Enterprise Software Development Company'
const description =
	'Quantum IT Solutions is a global software engineering company that delivers digital transformation and builds novel IT products.'
const image = '/favicon.ico'
const keywords = ['']

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
		additionalMetaTags: [{ name: 'keywords', content: keywords.join(',') }],
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

	return (
		<>
			<NextNProgress
				color={theme.palette.colors.GREEN}
				options={{
					showSpinner: false,
				}}
			/>
			<Head>
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' type='image/svg+xml' href='/icon.svg' />
				<link rel='icon' type='image/png' href='/icon.png' />
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
