import { useLanguage } from './useLanguage'
import MenuItem from '@mui/material/MenuItem'
import { useTranslation } from 'next-i18next'
import { OPTION_LANGUAGES } from '@/constants/languages'
import { IconChevron } from '@/assets/icons/chevron'
import { Box, Select, Typography } from '@mui/material'
import { type ISelect, RenderIcon, Container, MenuItemWrap, MenuItemIcon } from './style'

export const SelectLanguage = ({ variant = 'header' }: ISelect) => {
	const { t } = useTranslation('common')
	const { value, handleChange } = useLanguage()

	return (
		<Container variant={variant}>
			<Select
				value={value}
				onChange={handleChange}
				IconComponent={props => (
					<div {...props}>
						<IconChevron />
					</div>
				)}
				renderValue={value => {
					const Icon = OPTION_LANGUAGES.find(option => option.value === value)
						?.Icon as () => JSX.Element
					const label = OPTION_LANGUAGES.find(option => option.value === value)?.label as string
					const short_label = OPTION_LANGUAGES.find(option => option.value === value)
						?.short_label as string

					return (
						<RenderIcon variant={variant}>
							<Box display='flex' alignItems='center' justifyContent='center' className='icon'>
								<Icon />
							</Box>
							<Typography variant='text70' component='h6'>
								{variant === 'drawer-mobile' ? t(short_label) : t(label)}
							</Typography>
						</RenderIcon>
					)
				}}
			>
				{OPTION_LANGUAGES.map(({ value, Icon, label, short_label }) => (
					<MenuItem key={value} value={value}>
						<MenuItemWrap>
							<MenuItemIcon variant={variant}>
								<Icon />
							</MenuItemIcon>
							<Typography variant='text70' component='h6'>
								{variant === 'drawer-mobile' ? t(short_label) : t(label)}
							</Typography>
						</MenuItemWrap>
					</MenuItem>
				))}
			</Select>
		</Container>
	)
}
