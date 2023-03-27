import { Link } from '@mui/material'
import { SOCIAL } from '@/constants/social'
import { type ISocial, Container } from './style'

export const Socials = ({ variant }: ISocial) => {
	return (
		<Container variant={variant}>
			{SOCIAL.map(({ Icon, href }, i) => (
				<Link href={href} key={i}>
					<Icon />
				</Link>
			))}
		</Container>
	)
}
