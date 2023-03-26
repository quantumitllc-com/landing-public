import { TextField } from './style'
import { IconMessage } from '@/assets/icons/message'
import { Button, InputAdornment } from '@mui/material'

export const Subscription = () => {
	return (
		<div>
			<TextField
				fullWidth
				type='email'
				placeholder='Enter your email'
				InputProps={{
					startAdornment: (
						<InputAdornment position='start'>
							<IconMessage />
						</InputAdornment>
					),
					endAdornment: (
						<InputAdornment position='end'>
							<Button size='small' variant='contained' sx={{ minWidth: 94 }}>
								Submit
							</Button>
						</InputAdornment>
					),
				}}
			/>
		</div>
	)
}
