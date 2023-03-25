import Head from 'next/head'
import { ReactNode } from 'react'
import { Main, Container } from './style'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'

interface IProps {
	title?: string
	children: ReactNode
}

export const Layout = ({ children, title }: IProps) => {
	const newTitle = title === undefined ? 'Quantum IT Solutions' : `${title} | Quantum IT Solutions`

	return (
		<>
			<Head>
				<title>{newTitle}</title>
			</Head>
			<Container>
				<Header />
				<Main>{children}</Main>
				<Footer />
			</Container>
		</>
	)
}
