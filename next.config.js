/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')

const nextConfig = {
	i18n,
	swcMinify: true,
	reactStrictMode: true,
	image: {
		formats: ['image/webp'],
		protocol: 'http',
		hostname: 'zmlsoft.com',
		port: '',
		pathname: '/media/**',
		domains: ['zmlsoft.com'],
	},
}

module.exports = nextConfig
