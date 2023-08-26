import { useRouter } from 'next/router'
import { getServices } from '@/pages/api'
import { Typography } from '@mui/material'
import { useTranslation } from 'next-i18next'
import type { IService } from '@/types/respones'
import { useQuery } from '@tanstack/react-query'
import { IconServices } from '@/assets/icons/services'
import { CardService } from '@/components/card-service'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { WrapIcon, Container, WrapCards, Wrapper } from './style'

export const Services = () => {
	const { locale } = useRouter()
	const { t } = useTranslation('common')
	const { data = [] } = useQuery<IService[]>({
		queryKey: [REACT_QUERY_KEYS.SERVICES, locale],
		queryFn: () => getServices(locale),
	})

	return (
		<Container>
			<WrapIcon data-aos='flip-left'>
				<IconServices />
			</WrapIcon>
			<Typography
				mb='10px'
				component='h4'
				align='center'
				variant='title50'
				textTransform='capitalize'
			>
				{t('our_service_for_you')}
			</Typography>
			<Typography
				component='p'
				align='center'
				variant='text50'
				sx={{
					maxWidth: '700px',
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
