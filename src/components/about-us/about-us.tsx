import Image from 'next/image'
import { getAbout } from '@/pages/api'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import type { IAbout } from '@/types/respones'
import { useQuery } from '@tanstack/react-query'
import ImageAboutUs from '@/assets/images/about-us.webp'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { Wrapper, WrapTexts, WrapImage, Container } from './style'

export const AboutUs = () => {
	const { locale } = useRouter()
	const { data = { text: '', title: '' } } = useQuery<IAbout>({
		queryKey: [REACT_QUERY_KEYS.ABOUT, locale],
		queryFn: () => getAbout(locale),
	})

	return (
		<Container>
			<Wrapper>
				<Typography variant='title30' component='h3'>
					ABOUT US
				</Typography>
				<WrapTexts>
					<Typography variant='title40' component='h2'>
						{data.title}
					</Typography>
					<Typography variant='text40' component='h4'>
						{data.text}
					</Typography>
				</WrapTexts>
			</Wrapper>
			<WrapImage>
				<Image fill priority alt='about-us' src={ImageAboutUs} placeholder='blur' />
			</WrapImage>
		</Container>
	)
}
