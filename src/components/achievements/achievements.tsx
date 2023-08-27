import Image from 'next/image'
import { useRouter } from 'next/router'
import { getAchievements } from '@/pages/api'
import { useTranslation } from 'next-i18next'
import { useTheme } from '@mui/material/styles'
import { Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Wrap, Wrapper, WrapImage, Container } from './style'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import ImageAchievementBg from '@/assets/images/achievement-bg.webp'
import ImageAchievementMobileBg from '@/assets/images/achievement-mobile-bg.webp'
import { IconAchievementDrunk } from '@/assets/icons/achievement-drunk'
import { IconAchievementProfits } from '@/assets/icons/achievement-profits'
import { IconAchievementProjects } from '@/assets/icons/achievement-projects'
import { IconAchievementExperience } from '@/assets/icons/achievement-experience'

interface IAchievement {
	value: number
	Icon: () => JSX.Element
	id: string
	symbol: string
}

const ACHIEVEMENTS: IAchievement[] = [
	{
		id: 'successful_projects',
		Icon: IconAchievementProjects,
		value: 0,
		symbol: '+',
	},
	{
		id: 'profits',
		Icon: IconAchievementProfits,
		value: 0,
		symbol: '%',
	},
	{
		id: 'experience',
		Icon: IconAchievementExperience,
		value: 0,
		symbol: 'years',
	},
	{
		id: 'coffee_drunk',
		Icon: IconAchievementDrunk,
		value: 0,
		symbol: '',
	},
]

export const Achievements = () => {
	const theme = useTheme()
	const { locale } = useRouter()
	const { t } = useTranslation('common')
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
		<Container data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
			<Wrapper>
				{data.map(({ id, Icon, value, symbol }: IAchievement) => (
					<Wrap key={id}>
						<Box display='flex' alignItems='center' justifyContent='center'>
							<Icon />
						</Box>
						<Box
							sx={{ gap: '2px', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
						>
							<Typography component='h4' variant='title180'>
								{value}
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
