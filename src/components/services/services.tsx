import { getServices } from '@/pages/api'
import { Typography } from '@mui/material'
import type { IService } from '@/types/respones'
import { useQuery } from '@tanstack/react-query'
import { IconServices } from '@/assets/icons/services'
import { CardService } from '@/components/card-service'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { WrapText, WrapIcon, Container, WrapCards, Wrapper } from './style'
import { useRouter } from 'next/router'

export const Services = () => {
	const { locale } = useRouter()
	const { data = [] } = useQuery<IService[]>({
		queryKey: [REACT_QUERY_KEYS.SERVICES, locale],
		queryFn: () => getServices(locale),
	})

	return (
		<Container>
			<WrapIcon>
				<IconServices />
			</WrapIcon>
			<Typography variant='title30' component='h3' align='center'>
				OUR SERVICE FOR YOU
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
					We try our best to provide a pleasant user experience
				</Typography>
			</WrapText>
			<Typography
				component='p'
				align='center'
				variant='text50'
				sx={{
					maxWidth: '700px',
					padding: '0 18px',
				}}
			>
				User experience is very important, therefore we are trying more so that users get the best
				and enjoyable experience
			</Typography>
			<Wrapper>
				<WrapCards>
					{data.map(v => (
						<CardService key={v.id} {...v} />
					))}
				</WrapCards>
			</Wrapper>
		</Container>
	)
}
