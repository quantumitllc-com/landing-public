/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
	i18n,
	swcMinify: true,
	reactStrictMode: true,
	images: {
		formats: ['image/webp'],
		remotePatterns: [
			{
				protocol: 'http',
				hostname: 'zmlsoft.com',
				port: '',
				pathname: '/media/**',
			},
		],
	},
}

module.exports = nextConfig
