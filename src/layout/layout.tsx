import { ReactNode } from 'react'
import { Main, Container } from './style'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactUs } from '@/components/contact-us'

interface IProps {
	title?: string
	children: ReactNode
}

export const Layout = ({ children, title }: IProps) => {
	const newTitle = title === undefined ? 'Quantum IT Solutions' : `${title} | Quantum IT Solutions`

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
