import { Navbar } from '@/components/navbar'
import { Up, Down, Wrapper, Container } from './style'
import { IconLogoHorizontal } from '@/assets/icons/logo-horizontal'

export const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<Up>
					<IconLogoHorizontal />
				</Up>
				<Down>
					<Navbar variant='footer' />
					<span>© 2022-2023, All Rights Reserved</span>
				</Down>
			</Wrapper>
		</Container>
	)
}
