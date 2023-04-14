import Head from 'next/head'
import { useState } from 'react'
import { Layout } from '@/layout'
import type { NextPage } from 'next'
import { DefaultSeo } from 'next-seo'
import { gilroy } from '@/utility/fonts'
import type { AppProps } from 'next/app'
import { theme } from '@/config/material'
import NextNProgress from 'nextjs-progressbar'
import DEFAULT_SEO from '../../next-seo.config'
import { ToastContainer } from 'react-toastify'
import { appWithTranslation } from 'next-i18next'
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
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' type='image/svg+xml' href='/icon.svg' />
				<link rel='icon' type='image/png' href='/icon.png' />
			</Head>
			<style jsx global>{`
				:root {
					--font-gilroy: ${gilroy.style.fontFamily};
				}
			`}</style>
			<DefaultSeo {...DEFAULT_SEO} />
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
