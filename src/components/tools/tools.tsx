import { Typography } from '@mui/material'
import { WrapText, Container } from './style'

export const Tools = () => {
	return (
		<Container>
			<Typography variant='title30' component='h3' align='center'>
				tools we use
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
					Let your projects take advantage of the latest technologies
				</Typography>
			</WrapText>
		</Container>
	)
}
