import { useState } from 'react'
import { useRouter } from 'next/router'
import { getTestimonials } from '@/pages/api'
import { useTranslation } from 'next-i18next'
import { ITestimonial } from '@/types/respones'
import { useQuery } from '@tanstack/react-query'
import { useKeenSlider } from 'keen-slider/react'
import { Typography, useTheme } from '@mui/material'
import { IconArrowCircle } from '@/assets/icons/arrow-circle'
import { IconTestimonials } from '@/assets/icons/testimonials'
import { CardTestimonial } from '@/components/card-testimonial'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { Slider, WrapText, WrapIcon, Container, WrapButtons, ArrowButton } from './style'

export const Testimonials = () => {
	const theme = useTheme()
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { data = [] } = useQuery<ITestimonial[]>({
		queryKey: [REACT_QUERY_KEYS.TESTIMONIALS, locale],
		queryFn: () => getTestimonials(locale),
	})
	const [loaded, setLoaded] = useState(false)
	const [currentSlide, setCurrentSlide] = useState(0)
	const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
		mode: 'free',
		slides: {
			perView: data.length === 1 ? 1 : 2,
			spacing: 20,
		},
		created() {
			setLoaded(true)
		},
		slideChanged(s) {
			setCurrentSlide(s.track.details.rel)
		},
		breakpoints: {
			[`(max-width: ${theme.breakpoints.values.sm}px)`]: {
				slides: { perView: 1.2, spacing: 12 },
			},
		},
	})
	console.log(data)
	return (
		<Container>
			<WrapIcon>
				<IconTestimonials />
			</WrapIcon>
			<Typography variant='title30' component='h3' align='center'>
				{t('our_client_testimonials')}
			</Typography>
			<WrapText>
				<Typography
					component='h4'
					align='center'
					variant='title50'
					sx={{
						maxWidth: '640px',
					}}
				>
					{t('our_clients_want_to_share_their_experiences_with_you')}
				</Typography>
			</WrapText>
			<Typography
				component='p'
				align='center'
				variant='text50'
				sx={{
					maxWidth: '750px',
					padding: '0 18px',
				}}
			>
				{t('we_always_try_make_the_experience_with_us_always_the_best')}
			</Typography>
			<Slider>
				<div ref={sliderRef} className='keen-slider'>
					{data.map(testimonial => (
						<CardTestimonial key={testimonial.id} className='keen-slider__slide' {...testimonial} />
					))}
				</div>
				{loaded && instanceRef.current && (
					<WrapButtons>
						<ArrowButton
							disabled={currentSlide === 0}
							onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
						>
							<IconArrowCircle />
						</ArrowButton>
						<ArrowButton
							isright='true'
							onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
							disabled={currentSlide === instanceRef.current.track.details.slides.length - 2}
						>
							<IconArrowCircle />
						</ArrowButton>
					</WrapButtons>
				)}
			</Slider>
		</Container>
	)
}
