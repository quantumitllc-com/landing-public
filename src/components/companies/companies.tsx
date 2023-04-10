import Image from 'next/image'
import { useRouter } from 'next/router'
import { useTheme } from '@mui/material'
import { getCompanies } from '@/pages/api'
import { ICompany } from '@/types/respones'
import { Wrapper, Container } from './style'
import { useQuery } from '@tanstack/react-query'
import { useKeenSlider } from 'keen-slider/react'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'

const animation = { duration: 10000, easing: (t: number) => t }

export const Companies = () => {
	const theme = useTheme()
	const { locale } = useRouter()
	const { data = [] } = useQuery<ICompany[]>({
		queryKey: [REACT_QUERY_KEYS.COMPANIES, locale],
		queryFn: () => getCompanies(locale),
	})

	const [sliderRef] = useKeenSlider<HTMLDivElement>({
		loop: true,
		drag: false,
		mode: 'free',
		renderMode: 'performance',
		slides: {
			perView: 5,
			spacing: 80,
		},
		breakpoints: {
			[`(max-width: ${theme.breakpoints.values.sm}px)`]: {
				slides: { perView: 3.2, spacing: 17 },
			},
		},
		created(s) {
			s.moveToIdx(5, true, animation)
		},
		updated(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation)
		},
		animationEnded(s) {
			s.moveToIdx(s.track.details.abs + 5, true, animation)
		},
	})

	return (
		<Container>
			<Wrapper ref={sliderRef} className='keen-slider'>
				{data.map(company => (
					<div key={company.id} className='keen-slider__slide'>
						<Image fill key={company.image} src={company.image} alt={`company-${company.id}`} />
					</div>
				))}
			</Wrapper>
		</Container>
	)
}
