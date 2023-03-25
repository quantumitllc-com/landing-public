import Link from 'next/link'
import { type INavbar, Nav } from './style'
import { NAVBAR } from '@/constants/navbar'

export const Navbar = ({ variant }: INavbar) => (
	<Nav variant={variant}>
		<ul>
			{NAVBAR.map(({ href, title }) => (
				<li key={href}>
					<Link href={href}>{title}</Link>
				</li>
			))}
		</ul>
	</Nav>
)
