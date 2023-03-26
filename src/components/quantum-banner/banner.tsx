import Image from 'next/image'
import ImageQuantumBanner from '@/assets/images/quantum-banner.webp'
import { Container } from './style'

export const QuantumBanner = () => {
	return (
		<Container>
			<Image fill src={ImageQuantumBanner} alt='quantum-it-solutions-banner' />
		</Container>
	)
}
