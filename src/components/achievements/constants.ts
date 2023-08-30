import { IconAchievementDrunk } from '@/assets/icons/achievement-drunk'
import { IconAchievementProfits } from '@/assets/icons/achievement-profits'
import { IconAchievementProjects } from '@/assets/icons/achievement-projects'
import { IconAchievementExperience } from '@/assets/icons/achievement-experience'

export interface IAchievement {
	value: number
	Icon: () => JSX.Element
	id: string
	symbol: string
}

export const ACHIEVEMENTS: IAchievement[] = [
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
