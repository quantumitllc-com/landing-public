import Image from 'next/image'
import { getIntro } from '@/pages/api'
import { useRouter } from 'next/router'
import { Video } from '@/components/video'
import { useTranslation } from 'next-i18next'
import type { IIntro } from '@/types/respones'
import { useTheme } from '@mui/material/styles'
import { useQuery } from '@tanstack/react-query'
import { Button, Typography } from '@mui/material'
import ImageRobot from '@/assets/images/robot.webp'
import { IconArrowUp } from '@/assets/icons/arrow-up'
import ImageMainBg from '@/assets/images/main-bg.webp'
import useMediaQuery from '@mui/material/useMediaQuery'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import ImageMainMobileBg from '@/assets/images/main-mobile-bg.webp'
import {
	Wrap,
	WrapRobot,
	WrapVideo,
	Container,
	WrapContent,
	WrapButton,
	WrapMobileVideo,
} from './style'

export const Main = () => {
	const theme = useTheme()
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const matches = useMediaQuery(theme.breakpoints.up('md'))
	const { data: dataIntro = { title: '', subtitle: '' } } = useQuery<IIntro>({
		queryKey: [REACT_QUERY_KEYS.INTRO, locale],
		queryFn: () => getIntro(locale),
	})

	return (
		<Container>
			<Image priority fill src={matches ? ImageMainBg : ImageMainMobileBg} alt='main' />
			<Wrap>
				<WrapContent>
					<Typography variant='title170' component='h1'>
						{dataIntro.title}
					</Typography>
					<Typography variant='text150' component='span'>
						{dataIntro.subtitle}
					</Typography>
					<WrapButton>
						<Button variant='mainGreen' endIcon={<IconArrowUp />}>
							{t('see_portfolio')}
						</Button>
					</WrapButton>
					<WrapVideo>
						<Video />
					</WrapVideo>
				</WrapContent>
				<WrapMobileVideo>
					<Video />
				</WrapMobileVideo>
				<WrapRobot>
					<Image priority fill src={ImageRobot} alt='robot' />
				</WrapRobot>
			</Wrap>
		</Container>
	)
}
