import Link from 'next/link'
import { IconLogoFooter } from '@/assets/icons/logo-footer'
import { IconLogoHeader } from '@/assets/icons/logo-header'

interface LogoProps {
	variant: 'header' | 'footer'
}

const LOGOES = {
	header: <IconLogoHeader />,
	footer: <IconLogoFooter />,
}

export const Logo = ({ variant }: LogoProps) => {
	return (
		<Link href='/' style={{ display: 'flex', alignItems: 'center' }}>
			{LOGOES[variant]}
		</Link>
	)
}
