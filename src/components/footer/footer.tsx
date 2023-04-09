import Link from 'next/link'
import { useRouter } from 'next/router'
import { Follow } from '@/components/follow'
import { Navbar } from '@/components/navbar'
import { useTranslation } from 'next-i18next'
import { Socials } from '@/components/socials'
import { Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { IconEmail } from '@/assets/icons/email'
import { IconPhone } from '@/assets/icons/phone'
import { getContactInformation } from '@/pages/api'
import type { IContactInformation } from '@/types/respones'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { IconLogoHorizontal } from '@/assets/icons/logo-horizontal'
import {
	Up,
	Down,
	Wrapper,
	Container,
	WrapContact,
	WrapMobileSocial,
	WrapDesktopSocial,
} from './style'

export const Footer = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { data = { email: '', phone_number: '' } } = useQuery<IContactInformation>({
		queryKey: [REACT_QUERY_KEYS.CONTACTINFORMATION, locale],
		queryFn: () => getContactInformation(locale),
	})

	return (
		<Container>
			<Wrapper>
				<Up>
					<Box className='wrap-up'>
						<Box mb='12px' display='flex' alignItems='center'>
							<IconLogoHorizontal />
						</Box>
						<Typography variant='text' component='h3'>
							{t(
								'creative_powered_to_fuel_your_growth_goals_we_build_world_class_digital_products_software_and_branding',
							)}
						</Typography>
						<WrapContact>
							<Link href={`tel: ${data.phone_number}`}>
								<Box gap='12px' display='flex' alignItems='center'>
									<Box display='flex' alignItems='center' justifyContent='center'>
										<IconPhone />
									</Box>
									<Box>
										<Typography variant='text10' component='h4'>
											{t('have_a_question')}
										</Typography>
										<Typography variant='text20' component='h5'>
											{data.phone_number}
										</Typography>
									</Box>
								</Box>
							</Link>
							<Link href={`mailto: ${data.email}`}>
								<Box gap='12px' display='flex' alignItems='center'>
									<Box display='flex' alignItems='center' justifyContent='center'>
										<IconEmail />
									</Box>
									<Box>
										<Typography variant='text10' component='h4'>
											{t('contact_us_at')}
										</Typography>
										<Typography variant='text20' component='h5'>
											{data.email}
										</Typography>
									</Box>
								</Box>
							</Link>
						</WrapContact>
					</Box>
					<Box className='wrap-up'>
						<Typography variant='title' component='h2'>
							{t('submit_an_application')}
						</Typography>
						<Typography m='12px 0 24px' variant='text' component='h3'>
							Lorem ipsum dolor sit amet consectetur. Nec aliquam neque at vitae. Congue interdum
							dolor laoreet mollis convallis nunc lacinia. Faucibus.
						</Typography>
						<Follow />
						<WrapDesktopSocial>
							<Socials variant='footer' />
						</WrapDesktopSocial>
					</Box>
				</Up>
				<Down>
					<Navbar variant='footer' />
					<span>© 2022-2023, {t('all_rights_reserved')}</span>
					<WrapMobileSocial>
						<Socials variant='footer' />
					</WrapMobileSocial>
				</Down>
			</Wrapper>
		</Container>
	)
}
