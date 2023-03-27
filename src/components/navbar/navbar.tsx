import Link from 'next/link'
import { Box } from '@mui/material'
import { type INavbar, Nav } from './style'
import { NAVBAR } from '@/constants/navbar'
import { IconDirectionRight } from '@/assets/icons/direction-right'

export const Navbar = ({ variant, onClick = () => {} }: INavbar) => (
	<Nav variant={variant}>
		<ul>
			{NAVBAR.map(({ href, title }) => (
				<li key={href} onClick={onClick}>
					<Link href={href}>
						<Box display='flex' alignItems='center' component='span'>
							{title}
						</Box>
						{variant === 'drawer-mobile' && (
							<Box display='flex' alignItems='center'>
								<IconDirectionRight />
							</Box>
						)}
					</Link>
				</li>
			))}
		</ul>
	</Nav>
)
