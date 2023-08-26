import { ITestimonial } from '@/types/respones'
import { Box, Typography } from '@mui/material'
import { IconQuotes } from '@/assets/icons/quotes'
import { WrapText, Container } from './style'

interface ICardTestimonial extends ITestimonial {
	className?: string
}

export const CardTestimonial = ({ className, ...testimonial }: ICardTestimonial) => {
	return (
		<Container className={className}>
			<WrapText>
				<Box className='icon'>
					<IconQuotes />
				</Box>
				<Typography variant='text140' component='p'>
					“{testimonial.text}”
				</Typography>
			</WrapText>
			<Box width='100%' display='flex' justifyContent='flex-end' flexDirection='column'>
				<Typography variant='title150' component='h6' align='right'>
					{testimonial.first_name} {testimonial.last_name}
					<Typography ml='5px' variant='inherit' component='span' fontWeight='400'>
						({testimonial.country})
					</Typography>
				</Typography>
				<Typography variant='title160' component='h6' align='right'>
					{testimonial.company_name}
				</Typography>
			</Box>
		</Container>
	)
}
