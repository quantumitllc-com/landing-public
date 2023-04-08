import Link from 'next/link'
import { useRouter } from 'next/router'
import { Follow } from '@/components/follow'
import { Navbar } from '@/components/navbar'
import { CONTACT } from '@/constants/contact'
import { Socials } from '@/components/socials'
import { Box, Typography } from '@mui/material'
import { useQuery } from '@tanstack/react-query'
import { getContactInformation } from '@/pages/api'
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
	const { data = [] } = useQuery({
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
							Creative-powered to fuel your growth goals. We build world-class digital products,
							software and branding.
						</Typography>
						<WrapContact>
							{CONTACT.map(({ Icon, title, value, type }, i) => (
								<Link key={i} href={`${type}: ${value}`}>
									<Box gap='12px' display='flex' alignItems='center'>
										<Box display='flex' alignItems='center' justifyContent='center'>
											<Icon />
										</Box>
										<Box>
											<Typography variant='text10' component='h4'>
												{title}
											</Typography>
											<Typography variant='text20' component='h5'>
												{value}
											</Typography>
										</Box>
									</Box>
								</Link>
							))}
						</WrapContact>
					</Box>
					<Box className='wrap-up'>
						<Typography variant='title' component='h2'>
							Submit An Application
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
					<span>© 2022-2023, All Rights Reserved</span>
					<WrapMobileSocial>
						<Socials variant='footer' />
					</WrapMobileSocial>
				</Down>
			</Wrapper>
		</Container>
	)
}
