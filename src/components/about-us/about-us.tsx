import Image from 'next/image'
import { SUPPORTS } from './constants'
import { useTranslation } from 'next-i18next'
import { Box, Typography } from '@mui/material'
import { Achievements } from '@/components/achievements'
import ImageAboutLogo from '@/assets/images/about-logo.webp'
import { Li, Ul, Wrapper, WrapImage, WrapTexts, Container } from './style'

export const AboutUs = () => {
	const { t } = useTranslation('common')

	return (
		<>
			<Container>
				<Wrapper>
					<WrapImage>
						<Image fill src={ImageAboutLogo} alt='quantum-logo' />
					</WrapImage>
					<Typography component='h2' align='center' variant='title10'>
						{t('What_you_get_by_contacting_us')}
					</Typography>
					<Ul>
						{SUPPORTS.map(({ Icon, text, title }) => (
							<Li key={title} data-aos='fade-up' data-aos-anchor-placement='center-bottom'>
								<Box display='flex'>
									<Icon />
								</Box>
								<WrapTexts>
									<Typography title={title} component='h3' variant='title70'>
										{title}
									</Typography>
									<Typography variant='text60' maxWidth='450px'>
										{text}
									</Typography>
								</WrapTexts>
							</Li>
						))}
					</Ul>
				</Wrapper>
			</Container>
			<Achievements />
		</>
	)
}
