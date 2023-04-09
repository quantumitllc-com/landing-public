import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { IconPlay } from '@/assets/icons/play'
import { useBoolean } from '@/hooks/useBoolean'
import { useQuery } from '@tanstack/react-query'
import { getIntro, getVideo } from '@/pages/api'
import { IconLaptop } from '@/assets/icons/laptop'
import { IconScreen } from '@/assets/icons/screen'
import { ContactUs } from '@/components/contact-us'
import type { IVideo, IIntro } from '@/types/respones'
import { IconBackground } from '@/assets/icons/background'
import { Dialog, IconButton, Typography } from '@mui/material'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { WrapText, WrapText10, Container, WrapLaptop, WrapBackground } from './style'

export const HomeBanner = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { value, setTrue, setFalse } = useBoolean()
	const { data: dataVideo = { video_url: '' } } = useQuery<IVideo>({
		queryKey: [REACT_QUERY_KEYS.VIDEO],
		queryFn: getVideo,
	})
	const { data: dataIntro = { title: '', subtitle: '' } } = useQuery<IIntro>({
		queryKey: [REACT_QUERY_KEYS.INTRO, locale],
		queryFn: () => getIntro(locale),
	})

	return (
		<Container>
			<Typography align='center' variant='title30' component='h3'>
				{t('the_best_creative_agency')}
			</Typography>
			<WrapText>
				<Typography component='h1' align='center' variant='title60'>
					{dataIntro.title}
				</Typography>
			</WrapText>
			<WrapText10>
				<Typography align='center' variant='text40'>
					{dataIntro.subtitle}
				</Typography>
			</WrapText10>
			<ContactUs variant='request' />
			<WrapLaptop>
				<IconLaptop />
				<div className='screen'>
					<div className='video_play'>
						<video>
							<source src={dataVideo.video_url} />
						</video>
						<IconButton onClick={setTrue} className='play'>
							<IconPlay />
						</IconButton>
						<Dialog open={value} onClose={setFalse} maxWidth='lg'>
							<video controls>
								<source src={dataVideo.video_url} />
							</video>
						</Dialog>
					</div>
					<IconScreen />
				</div>
			</WrapLaptop>
			<WrapBackground>
				<IconBackground />
			</WrapBackground>
		</Container>
	)
}
