import Link from 'next/link'
import type { GetStaticProps } from 'next'
import { Icon404 } from '@/assets/icons/404'
import { useTranslation } from 'next-i18next'
import { Box, Button, Typography } from '@mui/material'
import { getContactInformation, getServices } from './api'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { REACT_QUERY_KEYS } from '@/constants/react-query-keys'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

const NotFound404 = () => {
	const { t } = useTranslation('common')

	return (
		<Box
			data-aos='fade-up'
			data-aos-duration='2000'
			sx={theme => ({
				gap: '50px',
				flexGrow: 1,
				display: 'flex',
				padding: '150px 0',
				alignItems: 'center',
				flexDirection: 'column',
				justifyContent: 'center',
				[theme.breakpoints.down('md')]: {
					paddingTop: '100px',
				},
			})}
		>
			<Box
				sx={theme => ({
					display: 'flex',
					justifyContent: 'center',
					[theme.breakpoints.down('md')]: {
						svg: {
							width: '80%',
							height: '80%',
						},
					},
				})}
			>
				<Icon404 />
			</Box>
			<Box display='flex' alignItems='center' flexDirection='column'>
				<Typography component='h4' align='center' variant='title190' textTransform='capitalize'>
					{t('page_not_found')}
				</Typography>
				<Typography
					component='p'
					align='center'
					variant='text50'
					sx={{
						maxWidth: '550px',
						padding: '0 18px',
					}}
				>
					{t(
						'we_are_sorry_the_page_you_requested_could_not_be_found_please_go_back_to_the_homepage',
					)}
				</Typography>
			</Box>
			<Button component={Link} href='/' variant='contained'>
				Back to Home
			</Button>
		</Box>
	)
}

export default NotFound404

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const queryClient = new QueryClient()
	await Promise.allSettled([
		queryClient.prefetchQuery([REACT_QUERY_KEYS.SERVICES, locale], () => getServices(locale)),
		queryClient.prefetchQuery([REACT_QUERY_KEYS.CONTACTINFORMATION, locale], () =>
			getContactInformation(locale),
		),
	])

	return {
		props: {
			dehydratedState: dehydrate(queryClient),
			...(await serverSideTranslations(locale as string, ['common'])),
		},
	}
}
