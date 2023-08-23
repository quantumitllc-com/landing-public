import Image from 'next/image'
import { useRouter } from 'next/router'
import { Video } from '@/components/video'
import { useTranslation } from 'next-i18next'
import { useQuery } from '@tanstack/react-query'
import { getIntro, getVideo } from '@/pages/api'
import ImageRobot from '@/assets/images/robot.webp'
import { IconArrowUp } from '@/assets/icons/arrow-up'
import type { IVideo, IIntro } from '@/types/respones'
import ImageMainBg from '@/assets/images/main-bg.webp'
import { Box, Button, Typography } from '@mui/material'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { Wrap, WrapRobot, WrapVideo, Container, WrapContent } from './style'

export const Main = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { data: dataIntro = { title: '', subtitle: '' } } = useQuery<IIntro>({
		queryKey: [REACT_QUERY_KEYS.INTRO, locale],
		queryFn: () => getIntro(locale),
	})

	return (
		<Container>
			<Image priority fill src={ImageMainBg} alt='main' />
			<Wrap>
				<WrapContent>
					<Typography variant='title170' component='h1'>
						{dataIntro.title}
					</Typography>
					<Typography mb='33px' variant='text150' component='span'>
						{dataIntro.subtitle}
					</Typography>
					<Box>
						<Button variant='mainGreen' endIcon={<IconArrowUp />}>
							{t('see_portfolio')}
						</Button>
					</Box>
					<WrapVideo>
						<Video />
					</WrapVideo>
				</WrapContent>
				<WrapRobot>
					<Image priority fill src={ImageRobot} alt='robot' />
				</WrapRobot>
			</Wrap>
		</Container>
	)
}
