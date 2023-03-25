import Head from 'next/head'
import { ReactNode } from 'react'
import { Main, Container } from './style'

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
				<div>Header</div>
				<Main>{children}</Main>
				<div>Footer</div>
			</Container>
		</>
	)
}
