import { ReactNode } from 'react'
import { Main, Container } from './style'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactUs } from '@/components/contact-us'

interface IProps {
	children: ReactNode
}

export const Layout = ({ children }: IProps) => {
	return (
		<>
			<Container>
				<Header />
				<Main>{children}</Main>
				<ContactUs variant='touch' />
				<Footer />
			</Container>
		</>
	)
}
