import { useRouter } from 'next/router'
import { useRef, LegacyRef } from 'react'
import Carousel from 'react-multi-carousel'
import { getTestimonials } from '@/pages/api'
import { useQuery } from '@tanstack/react-query'
import type { ITestimonial } from '@/types/respones'
import { IconButton, Typography } from '@mui/material'
import { IconArrowCircle } from '@/assets/icons/arrow-circle'
import { IconTestimonials } from '@/assets/icons/testimonials'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { CardTestimonial } from '@/components/card-testimonial/card'
import { Slider, WrapIcon, WrapText, Container, WrapButtons } from './style'

const responsive = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 2,
	},
	mobile: {
		breakpoint: {
			max: 600,
			min: 0,
		},
		items: 1,
	},
}

export const Testimonials = () => {
	const { locale } = useRouter()
	const { data = [] } = useQuery<ITestimonial[]>({
		queryKey: [REACT_QUERY_KEYS.TESTIMONIALS, locale],
		queryFn: () => getTestimonials(locale),
	})

	const ref: LegacyRef<Carousel> | undefined = useRef(null)
	const handleNextSlide = () => {
		if (ref.current && ref.current.state.totalItems - 1 !== ref.current.state.currentSlide)
			ref.current?.goToSlide(ref.current.state.currentSlide + 1)
	}
	const handlePrevSlide = () => {
		if (ref.current && ref.current.state.currentSlide !== 0)
			ref.current?.goToSlide(ref.current.state.currentSlide - 1)
	}

	return (
		<Container>
			<WrapIcon>
				<IconTestimonials />
			</WrapIcon>
			<Typography variant='title30' component='h3' align='center'>
				OUR client testimonials
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
					Our clients want to share their experiences with you
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
				We always try make the experience with us always the best. Therefore we are very concerned
				about our performance. These are the stories some clients who have worked with us
			</Typography>
			<Slider>
				<Carousel
					ssr
					ref={ref}
					draggable
					swipeable
					arrows={false}
					keyBoardControl
					renderDotsOutside
					deviceType='desktop'
					responsive={responsive}
					containerClass='carousel-container'
					dotListClass='custom-dot-list-style'
					itemClass='carousel-item-padding-40-px'
				>
					<CardTestimonial />
					<CardTestimonial />
					<CardTestimonial />
					<CardTestimonial />
				</Carousel>
				<WrapButtons>
					<IconButton onClick={handlePrevSlide}>
						<IconArrowCircle />
					</IconButton>
					<IconButton onClick={handleNextSlide}>
						<IconArrowCircle />
					</IconButton>
				</WrapButtons>
			</Slider>
		</Container>
	)
}
