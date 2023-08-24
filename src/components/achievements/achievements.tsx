import Image from 'next/image'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { getAchievements } from '@/pages/api'
import { useQuery } from '@tanstack/react-query'
import { IAchievements } from '@/types/respones'
import { Wrapper, WrapImage, Container } from './style'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import ImageAchievementBg from '@/assets/images/achievement-bg.webp'

export const Achievements = () => {
	const { locale } = useRouter()
	const { data = [] } = useQuery<IAchievements[]>({
		queryKey: [REACT_QUERY_KEYS.ACHIEVEMENTS, locale],
		queryFn: () => getAchievements(locale),
	})

	return (
		<Container>
			<Wrapper>
				{data.map(achievement => (
					<div key={achievement.id}>
						<div>
							<Image width={44} height={44} src={achievement.icon} alt={achievement.name} />
						</div>
						<Typography>{achievement.number}</Typography>
						<Typography>{achievement.name}</Typography>
					</div>
				))}
			</Wrapper>
			<WrapImage>
				<Image priority fill src={ImageAchievementBg} alt='achievements' />
			</WrapImage>
		</Container>
	)
}
