import { useLanguage } from './useLanguage'
import MenuItem from '@mui/material/MenuItem'
import { useTranslation } from 'next-i18next'
import { options } from '@/constants/languages'
import { IconChevron } from '@/assets/icons/chevron'
import { Box, Select, Typography } from '@mui/material'
import { RenderIcon, Container, MenuItemWrap, MenuItemIcon } from './style'

export const SelectLanguage = () => {
	const { t } = useTranslation('common')
	const { value, handleChange } = useLanguage()

	return (
		<Container>
			<Select
				value={value}
				onChange={handleChange}
				IconComponent={props => (
					<div {...props}>
						<IconChevron />
					</div>
				)}
				renderValue={value => {
					const Icon = options.find(option => option.value === value)?.Icon as () => JSX.Element
					const label = options.find(option => option.value === value)?.label as string

					return (
						<RenderIcon>
							<Box display='flex' alignItems='center' justifyContent='center'>
								<Icon />
							</Box>
							<Typography variant='text70' component='h6'>
								{t(label)}
							</Typography>
						</RenderIcon>
					)
				}}
			>
				{options.map(({ value, Icon, label }) => (
					<MenuItem key={value} value={value}>
						<MenuItemWrap>
							<MenuItemIcon>
								<Icon />
							</MenuItemIcon>
							<Typography variant='text70' component='h6'>
								{t(label)}
							</Typography>
						</MenuItemWrap>
					</MenuItem>
				))}
			</Select>
		</Container>
	)
}
