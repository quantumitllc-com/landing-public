import { Typography } from '@mui/material'
import { WrapText, Container } from './style'

export const Projects = () => {
	return (
		<Container>
			<Typography variant='title30' component='h3' align='center'>
				OUR LATEST PROJECT
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
					Our latest project is the result of the hard work of designers
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
				Projects that are carried out professionally, with collaboration between divisions, produce
				projects that are ready to use, with great designs and details
			</Typography>
		</Container>
	)
}
