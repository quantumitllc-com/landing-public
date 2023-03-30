import { Typography } from '@mui/material'
import { WrapText, Container } from './style'

export const CardService = () => {
	return (
		<Container>
			<WrapText>
				<Typography variant='title70' component='h2'>
					Web Development
				</Typography>
			</WrapText>
			<Typography variant='text60' component='h3'>
				Lorem ipsum dolor sit amet consectetur. Adipiscing nisl egestas cras donec risus. Dictum
				scelerisque nunc vitae risus massa neque morbi hac. Aliquam augue sed ac habitant proin.
			</Typography>
		</Container>
	)
}
