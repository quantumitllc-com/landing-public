import { Link } from '@mui/material'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { type ISocial, Container } from './style'
import { getContactInformation } from '@/pages/api'
import { IconFacebook } from '@/assets/icons/facebook'
import { IconLinkedin } from '@/assets/icons/linkedin'
import { IconTelegram } from '@/assets/icons/telegram'
import { IconInstagram } from '@/assets/icons/instagram'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'

const SOCIALS = [
	{
		id: 'telegram',
		href: '',
		Icon: IconTelegram,
	},
	{
		id: 'instagram',
		href: '',
		Icon: IconInstagram,
	},
	{
		id: 'facebook',
		href: '',
		Icon: IconFacebook,
	},
	{
		id: 'linkedin',
		href: '',
		Icon: IconLinkedin,
	},
]

export const Socials = ({ variant }: ISocial) => {
	const { locale } = useRouter()
	const { data = [] } = useQuery({
		queryKey: [REACT_QUERY_KEYS.CONTACTINFORMATION, locale],
		queryFn: () => getContactInformation(locale),
		select: res => {
			const data = SOCIALS.map(s => ({ ...s, href: res[s.id] })).filter(
				v => v.href && v.href.length > 0,
			)
			return data
		},
	})

	if (data.length === 0) {
		return null
	}

	return (
		<Container variant={variant}>
			{data.map(({ id, Icon, href }) => (
				<Link key={id} href={href} target='_blank'>
					<Icon />
				</Link>
			))}
		</Container>
	)
}
