import { Container } from './style'
import { Avatar, Box, Typography } from '@mui/material'
import { stringAvatar } from '@/utility/stringAvatar'

export const CardTestimonial = () => {
	return (
		<Container>
			<Box gap='13px' display='flex' alignItems='center'>
				<Avatar {...stringAvatar('Kent Dodds')} sx={{ width: 56, height: 56 }} />
				<Box display='flex' justifyContent='center' flexDirection='column'>
					<Typography>Annette Black</Typography>
					<Typography>Fayzee Studio</Typography>
				</Box>
			</Box>
			<Typography>
				“Quantum is the right choice for you. The performance of this team is very fast and
				satisfying. They are really professional”
			</Typography>
		</Container>
	)
}
