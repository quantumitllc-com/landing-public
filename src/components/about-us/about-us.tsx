import Image from 'next/image'
import { getAbout } from '@/pages/api'
import { SUPPORTS } from './constants'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import type { IAbout } from '@/types/respones'
import { Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import ImageAboutLogo from '@/assets/images/about-logo.webp'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { Li, Ul, Wrapper, WrapImage, WrapTexts, Container } from './style'

export const AboutUs = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { data = { text: '', title: '' } } = useQuery<IAbout>({
		queryKey: [REACT_QUERY_KEYS.ABOUT, locale],
		queryFn: () => getAbout(locale),
	})

	return (
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
						<Li key={title}>
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
	)
}
