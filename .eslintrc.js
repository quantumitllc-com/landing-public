module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		'plugin:react/recommended',
		'standard',
		'next/core-web-vitals',
		'prettier',
		'eslint-config-prettier',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	globals: {
		React: true,
		JSX: true,
	},
	plugins: ['react', '@typescript-eslint', 'prettier'],
	rules: {
		'no-unused-vars': 'warn',
		camelcase: 'off',
	},
}
