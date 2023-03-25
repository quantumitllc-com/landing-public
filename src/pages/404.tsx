import { Box, Button } from '@mui/material'
import { Icon404 } from '@/assets/icons/404'

const NotFound404 = () => {
	return (
		<Box
			gap='50px'
			flexGrow={1}
			display='flex'
			paddingY='50px'
			alignItems='center'
			flexDirection='column'
			justifyContent='center'
		>
			<Box>
				<Icon404 />
			</Box>
			<Button variant='contained'>Back to Home</Button>
		</Box>
	)
}

export default NotFound404
