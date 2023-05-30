module.exports = {
	apps: [
		{
			name: 'website',
			exec_mode: 'cluster',
			instances: '2',
			script: 'node_modules/next/dist/bin/next',
			args: 'start',
		},
	],
}
