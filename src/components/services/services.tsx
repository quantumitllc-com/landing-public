import { useRouter } from 'next/router'
import { getServices } from '@/pages/api'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import type { IService } from '@/types/respones'
import { useQuery } from '@tanstack/react-query'
import { IconServices } from '@/assets/icons/services'
import { CardService } from '@/components/card-service'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { WrapText, WrapIcon, Container, WrapCards, Wrapper } from './style'

export const Services = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
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
				{t('our_service_for_you')}
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
					{t('we_try_your_best_to_provide_a_pleasant_user_experience')}
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
				{t('user_experience_is_very_important_and_enjoyable_experience')}
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
