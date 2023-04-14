module.exports = {
	i18n: {
		locales: ['en', 'ru'],
		defaultLocale: 'en',
		localeDetection: false,
	},
	react: { useSuspense: false },

	domains: [
		{
			domain: 'https://quantumitllc.com',
			defaultLocale: 'en',
		},
		{
			domain: 'https://quantumitllc.com/ru',
			defaultLocale: 'ru',
		},
	],
}
