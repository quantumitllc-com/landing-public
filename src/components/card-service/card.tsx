import Image from 'next/image'
import { Typography } from '@mui/material'
import { IService } from '@/types/serivce'
import { Circle, Wrapper, WrapText, WrapImage, Container, WrapCircle } from './style'

export const CardService = ({ text, title, dark_image, light_image }: IService) => {
	return (
		<Container>
			<Wrapper>
				<WrapCircle className='wrap-circle'>
					<Circle className='circle'>
						<WrapImage className='light_image'>
							<Image fill src={light_image} alt={title} priority />
						</WrapImage>
						<WrapImage className='dark_image'>
							<Image fill src={dark_image} alt={title} priority />
						</WrapImage>
					</Circle>
				</WrapCircle>
				<WrapText>
					<Typography variant='title70' component='h2'>
						{title}
					</Typography>
				</WrapText>
				<Typography variant='text60' component='h3'>
					{text}
				</Typography>
			</Wrapper>
		</Container>
	)
}
