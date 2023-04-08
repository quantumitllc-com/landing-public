import Image from 'next/image'
import { useRouter } from 'next/router'
import { getCompanies } from '@/pages/api'
import Carousel from 'react-multi-carousel'
import { Wrapper, Container } from './style'
import { useQuery } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'

const responsive = {
	desktop: {
		breakpoint: {
			max: 3000,
			min: 1024,
		},
		items: 5,
	},
	mobile: {
		breakpoint: {
			max: 600,
			min: 0,
		},
		items: 3,
	},
	tablet: {
		breakpoint: {
			max: 1024,
			min: 464,
		},
		items: 2,
	},
}

interface ICompany {
	id: number
	image: string
}

export const Companies = () => {
	const { locale } = useRouter()
	const { data = [] } = useQuery({
		queryKey: [REACT_QUERY_KEYS.COMPANIES, locale],
		queryFn: () => getCompanies(locale),
	})

	return (
		<Container>
			<Wrapper>
				<Carousel
					ssr
					infinite
					autoPlay
					draggable
					swipeable
					pauseOnHover
					arrows={false}
					autoPlaySpeed={1}
					slidesToSlide={1}
					minimumTouchDrag={80}
					additionalTransfrom={0}
					responsive={responsive}
					transitionDuration={1000}
					customTransition='all 5s linear'
				>
					{data.map((company: ICompany) => (
						<Image
							fill
							key={company.image}
							src={company.image}
							alt={`company-${company.id}`}
							style={{ cursor: 'pointer' }}
						/>
					))}
				</Carousel>
			</Wrapper>
		</Container>
	)
}
