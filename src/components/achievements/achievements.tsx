import Image from 'next/image'
import { useRef } from 'react'
import { useRouter } from 'next/router'
import { getAchievements } from '@/pages/api'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { CountUp } from '@/components/count-up'
import { useQuery } from '@tanstack/react-query'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ACHIEVEMENTS, type IAchievement } from './constants'
import { Wrap, Wrapper, WrapImage, Container } from './style'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import ImageAchievementBg from '@/assets/images/achievement-bg.webp'
import ImageAchievementMobileBg from '@/assets/images/achievement-mobile-bg.webp'

export const Achievements = () => {
	const theme = useTheme()
	const date = new Date()
	const { locale } = useRouter()
	const currentHours = date.getHours()
	const { t } = useTranslation('common')
	const myElementRef = useRef<HTMLDivElement | null>(null)
	const matches = useMediaQuery(theme.breakpoints.up('sm'))
	const { data = [] } = useQuery({
		queryKey: [REACT_QUERY_KEYS.ACHIEVEMENTS, locale],
		queryFn: () => getAchievements(locale),
		select: res => {
			const data = ACHIEVEMENTS.map(a => ({ ...a, value: res[a.id] }))
			return data
		},
	})

	return (
		<Container data-aos='fade-up' data-aos-anchor-placement='top-bottom' ref={myElementRef}>
			<Wrapper>
				{data.map(({ id, Icon, value, symbol }: IAchievement) => (
					<Wrap key={id}>
						<Box display='flex' alignItems='center' justifyContent='center'>
							<Icon />
						</Box>
						<Box
							sx={{
								gap: '2px',
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'column',
							}}
						>
							<Typography component='h4' variant='title180'>
								<CountUp value={id === 'coffee_drunk' ? value + currentHours : value} />
								{t(symbol)}
							</Typography>
							<Typography component='h6' variant='text160' align='center'>
								{t(id)}
							</Typography>
						</Box>
					</Wrap>
				))}
			</Wrapper>
			<WrapImage>
				<Image
					fill
					priority
					alt='achievements'
					src={matches ? ImageAchievementBg : ImageAchievementMobileBg}
				/>
			</WrapImage>
		</Container>
	)
}
