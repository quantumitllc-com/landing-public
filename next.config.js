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
				hostname: 'quantumitllc.com',
				port: '',
				pathname: '/media/**',
			},
		],
	},
}

module.exports = nextConfig
