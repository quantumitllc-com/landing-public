import { useRouter } from 'next/router'
import { Menu } from '@/components/menu'
import { Logo } from '@/components/logo'
import { Navbar } from '@/components/navbar'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { Wrapper, WrapLeft, WrapRight, Container, WrapDesktop, WrapMobile } from './style'
import { SelectLanguage } from '../select-language'

export const Header = () => {
	const { pathname } = useRouter()
	const scrollPosition = useScrollPosition()

	return (
		<Container scrollPosition={pathname === '/' ? scrollPosition : 1}>
			<WrapDesktop>
				<Wrapper>
					<WrapLeft>
						<Logo variant='header' />
						<Navbar variant='header' />
					</WrapLeft>
					<WrapRight>
						<SelectLanguage variant='header' />
					</WrapRight>
				</Wrapper>
			</WrapDesktop>
			<WrapMobile>
				<Menu />
				<Logo variant='header' />
			</WrapMobile>
		</Container>
	)
}
