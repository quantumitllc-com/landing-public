import { WrapText, WrapIcon, Container } from './style'
import { Typography } from '@mui/material'
import { IconServices } from '@/assets/icons/services'

export const Services = () => {
	return (
		<Container>
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
				}}
			>
				User experience is very important, therefore we are trying more so that users get the best
				and enjoyable experience
			</Typography>
			<WrapIcon>
				<IconServices />
			</WrapIcon>
		</Container>
	)
}
