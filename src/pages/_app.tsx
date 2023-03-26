import Head from 'next/head'
import { Layout } from '@/layout'
import type { NextPage } from 'next'
import localFont from 'next/font/local'
import type { AppProps } from 'next/app'
import { theme } from '@/config/material'
import NextNProgress from 'nextjs-progressbar'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { createEmotionCache } from '@/utility/createEmotionCache'
import '@/styles/globals.css'

interface NewAppProps extends AppProps {
	Component: NextPage
	emotionCache?: EmotionCache
}

const gilroy = localFont({
	src: [
		{
			path: '../../public/fonts/GILROY-MEDIUM.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../../public/fonts/GILROY-LIGHT.ttf',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../../public/fonts/GILROY-BOLD.ttf',
			weight: '700',
			style: 'normal',
		},
	],
})

const clientSideEmotionCache = createEmotionCache()

const App = ({ Component, pageProps, emotionCache = clientSideEmotionCache }: NewAppProps) => {
	return (
		<>
			<Head>
				<title>Quantum IT Solutions</title>
				<meta name='description' content='Quantum IT Solutions' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<link rel='icon' type='image/svg+xml' href='/icon.svg' />
				<link rel='icon' type='image/png' href='/icon.png' />
			</Head>
			<style jsx global>{`
				:root {
					--gilroy-font: ${gilroy.style.fontFamily};
				}
			`}</style>
			<NextNProgress
				color={theme.palette.colors.GREEN}
				options={{
					showSpinner: false,
				}}
			/>
			<CacheProvider value={emotionCache}>
				<ThemeProvider theme={theme}>
					<Layout {...pageProps}>
						<CssBaseline />
						<Component {...pageProps} />
					</Layout>
				</ThemeProvider>
			</CacheProvider>
		</>
	)
}

export default appWithTranslation(App)
