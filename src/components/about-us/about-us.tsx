import Image from 'next/image'
import { Typography } from '@mui/material'
import ImageAboutUs from '@/assets/images/about-us.webp'
import { Wrapper, WrapTexts, WrapImage, Container, HighLight } from './style'

export const AboutUs = () => {
	return (
		<Container>
			<Wrapper>
				<Typography variant='title30' component='h3'>
					ABOUT US
				</Typography>
				<WrapTexts>
					<Typography variant='title40' component='h2'>
						We build bridges between <HighLight>companies and customers</HighLight>
					</Typography>
					<Typography variant='text40' component='h4'>
						To build software that gives customer-facing teams at small and medium sized businesses
						the ability to create fruitful and enduring relationships with customers.
					</Typography>
				</WrapTexts>
			</Wrapper>
			<WrapImage>
				<Image fill alt='about-us' src={ImageAboutUs} placeholder='blur' />
			</WrapImage>
		</Container>
	)
}
