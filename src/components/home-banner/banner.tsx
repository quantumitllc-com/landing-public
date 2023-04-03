import { getIntro, getVideo } from '@/pages/api'
import { Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { IconLaptop } from '@/assets/icons/laptop'
import { ContactUs } from '@/components/contact-us'
import { IconBackground } from '@/assets/icons/background'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { WrapText, Container, WrapLaptop, WrapBackground } from './style'
import { IconScreen } from '@/assets/icons/screen'
import { IconPlay } from '@/assets/icons/play'

export const HomeBanner = () => {
	// const { data } = useQuery({ queryKey: [REACT_QUERY_KEYS.INTRO], queryFn: getIntro })
	const { data } = useQuery({ queryKey: [REACT_QUERY_KEYS.VIDEO], queryFn: getVideo })
	console.log(data)

	return (
		<Container>
			<Typography align='center' variant='title30' component='h3'>
				THE BEST CREATIVE AGENCY
			</Typography>
			<WrapText>
				<Typography
					component='h1'
					align='center'
					variant='title60'
					sx={{
						maxWidth: '575px',
					}}
				>
					We are the solution for your project
				</Typography>
			</WrapText>
			<Typography
				align='center'
				variant='text40'
				sx={{
					maxWidth: '680px',
				}}
			>
				We are a creative agency that focuses on quality and user experience, Together with us make
				all your dream projects come true
			</Typography>
			<ContactUs variant='request' />
			<WrapLaptop>
				<IconLaptop />
				<div className='screen'>
					<div className='video_play'>
						<video>
							<source src={data.video_url} />
						</video>
						<div className='play'>
							<IconPlay />
						</div>
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
