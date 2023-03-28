import { Box, Button, Typography } from '@mui/material'
import { IconSpread } from '@/assets/icons/spread'
import { IconLaptop } from '@/assets/icons/laptop'
import { IconBackground } from '@/assets/icons/background'
import { WrapText, Container, WrapButton, WrapLaptop, WrapBackground } from './style'

export const HomeBanner = () => {
	return (
		<Container>
			<Typography align='center' variant='title30' component='h3'>
				THE BEST CREATIVE AGENCY
			</Typography>
			<WrapText>
				<Typography
					component='h1'
					align='center'
					variant='title60'
					sx={{
						maxWidth: '575px',
					}}
				>
					We are the solution for your project
				</Typography>
			</WrapText>
			<Typography
				align='center'
				variant='text40'
				sx={{
					maxWidth: '680px',
				}}
			>
				We are a creative agency that focuses on quality and user experience, Together with us make
				all your dream projects come true
			</Typography>
			<WrapButton>
				<Box display='flex' alignItems='center' className='icon-spread' justifyContent='center'>
					<IconSpread />
				</Box>
				<Button
					variant='contained'
					style={{
						textTransform: 'unset',
					}}
				>
					Request a quote
				</Button>
			</WrapButton>
			<WrapLaptop>
				<IconLaptop />
			</WrapLaptop>
			<WrapBackground>
				<IconBackground />
			</WrapBackground>
		</Container>
	)
}
