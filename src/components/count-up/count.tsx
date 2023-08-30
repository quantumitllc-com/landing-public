import { useRef } from 'react'
import { Waypoint } from 'react-waypoint'
import { useCountUp } from 'react-countup'
import { Typography } from '@mui/material'

interface CountUpProps {
	value: number
}

export const CountUp = ({ value }: CountUpProps) => {
	const countUpRef = useRef(null)
	const { start, reset } = useCountUp({
		ref: countUpRef,
		start: 0,
		end: value,
	})

	return (
		<Waypoint onEnter={start} onLeave={reset}>
			<Typography variant='inherit' ref={countUpRef} component='span' />
		</Waypoint>
	)
}
