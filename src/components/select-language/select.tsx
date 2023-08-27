import { useLanguage } from './useLanguage'
import MenuItem from '@mui/material/MenuItem'
import { useTranslation } from 'next-i18next'
import { IconGlobal } from '@/assets/icons/global'
import { Box, Select, Typography } from '@mui/material'
import { OPTION_LANGUAGES } from '@/constants/languages'
import { IconArrowDown } from '@/assets/icons/arrow-down'
import { type ISelect, RenderIcon, Container, MenuItemWrap, MenuItemIcon } from './style'

export const SelectLanguage = ({ variant }: ISelect) => {
	const { t } = useTranslation('common')
	const { value, handleChange } = useLanguage()

	return (
		<Container variant={variant}>
			<Select
				value={value}
				onChange={handleChange}
				IconComponent={props => (
					<div {...props}>
						<IconArrowDown />
					</div>
				)}
				renderValue={value => {
					const Icon =
						variant === 'drawer-mobile'
							? (OPTION_LANGUAGES.find(option => option.value === value)?.Icon as () => JSX.Element)
							: IconGlobal
					const short_label = OPTION_LANGUAGES.find(option => option.value === value)
						?.short_label as string

					return (
						<RenderIcon variant={variant}>
							<Box display='flex' alignItems='center' justifyContent='center' className='icon'>
								<Icon />
							</Box>
							<Typography
								variant='text70'
								component='h6'
								color={theme => theme.palette.colors.WHITE}
								sx={{
									textTransform: variant === 'header' ? 'uppercase' : 'unset',
								}}
							>
								{t(short_label)}
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
