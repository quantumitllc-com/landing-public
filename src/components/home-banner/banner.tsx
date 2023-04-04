import { IconPlay } from '@/assets/icons/play'
import { useBoolean } from '@/hooks/useBoolean'
import { useQuery } from '@tanstack/react-query'
import { getIntro, getVideo } from '@/pages/api'
import { IconLaptop } from '@/assets/icons/laptop'
import { IconScreen } from '@/assets/icons/screen'
import { ContactUs } from '@/components/contact-us'
import { IconBackground } from '@/assets/icons/background'
import { Dialog, IconButton, Typography } from '@mui/material'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { WrapText, WrapText10, Container, WrapLaptop, WrapBackground } from './style'

export const HomeBanner = () => {
	const { value, setTrue, setFalse } = useBoolean()
	const { data } = useQuery({ queryKey: [REACT_QUERY_KEYS.VIDEO], queryFn: getVideo })
	const { data: dataIntro } = useQuery({ queryKey: [REACT_QUERY_KEYS.INTRO], queryFn: getIntro })

	return (
		<Container>
			<Typography align='center' variant='title30' component='h3'>
				THE BEST CREATIVE AGENCY
			</Typography>
			<WrapText>
				<Typography component='h1' align='center' variant='title60'>
					{dataIntro?.title}
				</Typography>
			</WrapText>
			<WrapText10>
				<Typography align='center' variant='text40'>
					{dataIntro?.subtitle}
				</Typography>
			</WrapText10>
			<ContactUs variant='request' />
			<WrapLaptop>
				<IconLaptop />
				<div className='screen'>
					<div className='video_play'>
						<video>
							<source src={data?.video_url} />
						</video>
						<IconButton onClick={setTrue} className='play'>
							<IconPlay />
						</IconButton>
						<Dialog open={value} onClose={setFalse} maxWidth='lg'>
							<video controls>
								<source src={data?.video_url} />
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
