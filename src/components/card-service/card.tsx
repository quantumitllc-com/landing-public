import Image from 'next/image'
import { Typography } from '@mui/material'
import { WrapText, WrapImage, Container } from './style'

interface IService {
	image: string
	text: string
	title: string
}

export const CardService = ({ text, image, title }: IService) => {
	return (
		<Container>
			<WrapImage>
				<Image src={image} alt={title} fill />
			</WrapImage>
			<WrapText>
				<Typography variant='title70' component='h2'>
					{title}
				</Typography>
			</WrapText>
			<Typography variant='text60' component='h3'>
				{text}
			</Typography>
		</Container>
	)
}
