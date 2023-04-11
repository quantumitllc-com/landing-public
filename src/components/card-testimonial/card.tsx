import { ITestimonial } from '@/types/respones'
import { Box, Typography } from '@mui/material'
import { IconQuotes } from '@/assets/icons/quotes'
import { stringAvatar } from '@/utility/stringAvatar'
import { Avatar, WrapText, Container } from './style'

interface ICardTestimonial extends ITestimonial {
	className?: string
}

export const CardTestimonial = ({ className, ...testimonial }: ICardTestimonial) => {
	return (
		<Container className={className}>
			<Box gap='13px' display='flex' alignItems='center'>
				<Avatar
					src={testimonial.image}
					{...stringAvatar(`${testimonial.first_name} ${testimonial.last_name}`)}
				/>
				<Box display='flex' justifyContent='center' flexDirection='column'>
					<Typography variant='title150' component='h6'>
						{testimonial.first_name} {testimonial.last_name}
					</Typography>
					<Typography variant='title160' component='h6'>
						{testimonial.company_name}
					</Typography>
				</Box>
			</Box>
			<WrapText>
				<Box className='icon'>
					<IconQuotes />
				</Box>

				<Typography variant='text140' component='p'>
					“{testimonial.text}”
				</Typography>
			</WrapText>
		</Container>
	)
}
