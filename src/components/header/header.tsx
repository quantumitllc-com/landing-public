import { useRouter } from 'next/router'
import { Logo } from '@/components/logo'
import { Navbar } from '@/components/navbar'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { Wrapper, WrapLeft, WrapRight, Container } from './style'

export const Header = () => {
	const { pathname } = useRouter()
	const scrollPosition = useScrollPosition()

	return (
		<Container scrollPosition={pathname === '/' ? scrollPosition : 1}>
			<Wrapper>
				<WrapLeft>
					<Logo variant='header' />
					<Navbar variant='header' />
				</WrapLeft>
				<WrapRight>WrapRight</WrapRight>
			</Wrapper>
		</Container>
	)
}
