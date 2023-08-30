import Link from 'next/link'
import Image from 'next/image'
import { NextSeo } from 'next-seo'
import { getIntro } from '@/pages/api'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { Video } from '@/components/video'
import { useTranslation } from 'next-i18next'
import type { IIntro } from '@/types/respones'
import { useQuery } from '@tanstack/react-query'
import ImageRobot from '@/assets/images/robot.webp'
import { IconArrowUp } from '@/assets/icons/arrow-up'
import ImageMainBg from '@/assets/images/main-bg.webp'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import ImageMainMobileBg from '@/assets/images/main-mobile-bg.webp'
import {
	Button,
	Container,
	WrapMobile,
	WrapDesktop,
	WrapMobileVideo,
	WrapMobileRobot,
	WrapDesktopRobot,
	WrapDesktopVideo,
	WrapMobileContent,
	WrapDesktopContent,
	WrapMobileContainer,
	WrapDesktopContainer,
} from './style'

export const Main = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { data: dataIntro = { title: '', subtitle: '', seo_keywords: [] } } = useQuery<IIntro>({
		queryKey: [REACT_QUERY_KEYS.INTRO, locale],
		queryFn: () => getIntro(locale),
	})

	return (
		<>
			<NextSeo
				additionalMetaTags={[{ name: 'keywords', content: dataIntro.seo_keywords.join(',') }]}
			/>
			<Container>
				<WrapDesktop>
					<Image priority fill src={ImageMainBg} alt={dataIntro.title} />
					<WrapDesktopContent>
						<WrapDesktopContainer>
							<Typography variant='title170' component='h1'>
								{dataIntro.title}
							</Typography>
							<Typography variant='text150' component='h2'>
								{dataIntro.subtitle}
							</Typography>
							<Button
								href='#projects'
								component={Link}
								variant='contained'
								endIcon={<IconArrowUp />}
								sx={{
									marginTop: '33px',
								}}
							>
								{t('see_portfolio')}
							</Button>
							<WrapDesktopVideo>
								<Video />
							</WrapDesktopVideo>
						</WrapDesktopContainer>
						<WrapDesktopRobot>
							<Image priority fill src={ImageRobot} alt={dataIntro.subtitle} />
						</WrapDesktopRobot>
					</WrapDesktopContent>
				</WrapDesktop>
				<WrapMobile>
					<Image priority fill src={ImageMainMobileBg} alt={dataIntro.title} />
					<WrapMobileContent>
						<WrapMobileContainer>
							<Typography variant='title170' component='h1'>
								{dataIntro.title}
							</Typography>
							<Typography variant='text150' component='h2' align='center'>
								{dataIntro.subtitle}
							</Typography>
							<Button
								href='#projects'
								component={Link}
								variant='contained'
								endIcon={<IconArrowUp />}
								sx={{
									marginTop: '13px',
								}}
							>
								{t('see_portfolio')}
							</Button>
						</WrapMobileContainer>
						<WrapMobileRobot>
							<WrapMobileVideo>
								<Video />
							</WrapMobileVideo>
							<Image priority fill src={ImageRobot} alt={dataIntro.subtitle} />
						</WrapMobileRobot>
					</WrapMobileContent>
				</WrapMobile>
			</Container>
		</>
	)
}
