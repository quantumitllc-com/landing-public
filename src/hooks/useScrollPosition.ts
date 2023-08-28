import { useState, useEffect } from 'react'

export const useScrollPosition = () => {
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect(() => {
		const updatePosition = () => {
			setScrollPosition(window?.pageYOffset ?? 0)
		}
		window.addEventListener('scroll', updatePosition)
		updatePosition()
		return () => window.removeEventListener('scroll', updatePosition)
	}, [])

	return scrollPosition
}
