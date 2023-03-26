import { IconTestimonials } from '@/assets/icons/testimonials'
import { Typography } from '@mui/material'
import { WrapIcon, WrapText, Container } from './style'

export const Testimonials = () => {
	return (
		<Container>
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
				}}
			>
				We always try make the experience with us always the best. Therefore we are very concerned
				about our performance. These are the stories some clients who have worked with us
			</Typography>
			<WrapIcon>
				<IconTestimonials />
			</WrapIcon>
		</Container>
	)
}
