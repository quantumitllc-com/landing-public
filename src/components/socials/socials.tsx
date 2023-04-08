import { Link } from '@mui/material'
import { useRouter } from 'next/router'
import { useQuery } from '@tanstack/react-query'
import { type ISocial, Container } from './style'
import { getContactInformation } from '@/pages/api'
import { IconFacebook } from '@/assets/icons/facebook'
import { IconLinkedin } from '@/assets/icons/linkedin'
import { IconTelegram } from '@/assets/icons/telegram'
import { IconInstagram } from '@/assets/icons/instagram'
import type { IContactInformation } from '@/types/respones'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'

export const Socials = ({ variant }: ISocial) => {
	const { locale } = useRouter()
	const { data } = useQuery<IContactInformation>({
		queryKey: [REACT_QUERY_KEYS.CONTACTINFORMATION, locale],
		queryFn: () => getContactInformation(locale),
	})

	return (
		<Container variant={variant}>
			{data?.telegram && (
				<Link href={data.telegram}>
					<IconTelegram />
				</Link>
			)}
			{data?.instagram && (
				<Link href={data.instagram}>
					<IconInstagram />
				</Link>
			)}
			{data?.facebook && (
				<Link href={data.facebook}>
					<IconFacebook />
				</Link>
			)}
			{data?.linkedin && (
				<Link href={data.linkedin}>
					<IconLinkedin />
				</Link>
			)}
		</Container>
	)
}
