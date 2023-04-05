import Image from 'next/image'
import { getAbout } from '@/pages/api'
import { Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import ImageAboutUs from '@/assets/images/about-us.webp'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { Wrapper, WrapTexts, WrapImage, Container } from './style'

export const AboutUs = () => {
	const { data } = useQuery({ queryKey: [REACT_QUERY_KEYS.ABOUT], queryFn: getAbout })
	return (
		<Container>
			<Wrapper>
				<Typography variant='title30' component='h3'>
					ABOUT US
				</Typography>
				<WrapTexts>
					<Typography variant='title40' component='h2'>
						We build bridges between companies and customers
					</Typography>
					<Typography variant='text40' component='h4'>
						To build software that gives customer-facing teams at small and medium sized businesses
						the ability to create fruitful and enduring relationships with customers.
					</Typography>
				</WrapTexts>
			</Wrapper>
			<WrapImage>
				<Image fill priority alt='about-us' src={ImageAboutUs} placeholder='blur' />
			</WrapImage>
		</Container>
	)
}
