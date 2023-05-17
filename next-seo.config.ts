/* eslint-disable import/no-anonymous-default-export */
import { DefaultSeoProps } from 'next-seo/lib/types'

const url = 'https://quantumitllc.com'
const siteName = 'Quantum IT Solutions'
const title = 'Enterprise Software Development Company'
const description =
	'Quantum IT Solutions is a global software engineering company that delivers digital transformation and builds novel IT products.'
const image = '/favicon.ico'
const keywords = ['']

const seoConfig: DefaultSeoProps = {
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
		locale: 'en_IE',
		images: [{ url: image, alt: siteName }],
	},
	twitter: {
		handle: '@handle',
		site: '@site',
		cardType: 'summary_large_image',
	},
	additionalMetaTags: [{ name: 'keywords', content: keywords.join(',') }],
}

export default seoConfig
