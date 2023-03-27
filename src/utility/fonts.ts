import localFont from 'next/font/local'

export const gilroy = localFont({
	preload: true,
	variable: '--font-gilroy',
	src: [
		{
			weight: '300',
			style: 'normal',
			path: '../../public/fonts/GILROY-LIGHT.ttf',
		},
		{
			weight: '400',
			style: 'normal',
			path: '../../public/fonts/GILROY-REGULAR.ttf',
		},
		{
			weight: '500',
			style: 'normal',
			path: '../../public/fonts/GILROY-MEDIUM.ttf',
		},
		{
			weight: '600',
			style: 'normal',
			path: '../../public/fonts/GILROY-SEMIBOLD.ttf',
		},
		{
			weight: '700',
			style: 'normal',
			path: '../../public/fonts/GILROY-BOLD.ttf',
		},
	],
})
