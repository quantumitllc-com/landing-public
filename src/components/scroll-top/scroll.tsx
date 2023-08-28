import { GoUpButton } from './style'
import { IconArrowUp } from '@/assets/icons/arrow-up'
import { useScrollPosition } from '@/hooks/useScrollPosition'

export const ScrollTop = () => {
	const scrollPosition = useScrollPosition()
	const isBrowser = () => typeof window !== 'undefined'

	function scrollToTop() {
		if (!isBrowser()) return
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<GoUpButton
			onClick={scrollToTop}
			data-aos='fade-up'
			sx={{ display: scrollPosition > 0 ? 'flex' : 'none' }}
		>
			<IconArrowUp />
		</GoUpButton>
	)
}
