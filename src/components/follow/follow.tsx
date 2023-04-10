import { useFollow } from './useFollow'
import { Controller } from 'react-hook-form'
import { useTranslation } from 'next-i18next'
import { InputAdornment } from '@mui/material'
import { TextField, ButtonSubmit } from './style'
import { IconMessage } from '@/assets/icons/message'

export const Follow = () => {
	const { t } = useTranslation('common')
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
							placeholder={t('enter_your_email') as string}
							helperText={errors.email ? (errors.email?.message as string) : ''}
							InputProps={{
								startAdornment: (
									<InputAdornment position='start'>
										<IconMessage />
									</InputAdornment>
								),
								endAdornment: (
									<InputAdornment position='end'>
										<ButtonSubmit
											size='small'
											type='submit'
											variant='contained'
											disabled={isLoading}
										>
											{t('submit')}
										</ButtonSubmit>
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
