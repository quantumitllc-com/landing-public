import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { getTechnologies } from '@/pages/api'
import { WrapText, Container } from './style'
import { useQuery } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'

export const Technologies = () => {
	const { locale } = useRouter()
	const { data = [] } = useQuery({
		queryKey: [REACT_QUERY_KEYS.TECHNOLOGIES, locale],
		queryFn: () => getTechnologies(locale),
	})

	return (
		<Container>
			<Typography variant='title30' component='h3' align='center'>
				tools we use
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
					Let your projects take advantage of the latest technologies
				</Typography>
			</WrapText>
		</Container>
	)
}
