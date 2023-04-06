import { TextField } from './style'
import { useFollow } from './useFollow'
import { Controller } from 'react-hook-form'
import { IconMessage } from '@/assets/icons/message'
import { Button, InputAdornment } from '@mui/material'

export const Follow = () => {
	const { form, onSubmit, isLoading } = useFollow()

	return (
		<form onSubmit={form.handleSubmit(onSubmit)}>
			<Controller
				name='email'
				control={form.control}
				render={({ field, formState: { errors } }) => {
					return (
						<TextField
							{...field}
							fullWidth
							type='email'
							error={!!errors.email}
							placeholder='Enter your email'
							helperText={errors.email ? (errors.email?.message as string) : ''}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<IconMessage />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position='end'>
										<Button
											size='small'
											type='submit'
											variant='contained'
											disabled={isLoading}
											sx={{ minWidth: 94 }}
										>
											Submit
										</Button>
									</InputAdornment>
								),
							}}
						/>
					)
				}}
			/>
		</form>
	)
}
