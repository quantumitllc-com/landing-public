import { forwardRef } from 'react'
import { useContact } from './useContact'
import { Input } from '@/components/input'
import { useTranslation } from 'next-i18next'
import { Checkbox } from '@/components/checkbox'
import { IconRemove } from '@/assets/icons/remove'
import { IconBgTouch } from '@/assets/icons/bg-touch'
import { TransitionProps } from '@mui/material/transitions'
import {
	Box,
	Button,
	Dialog,
	useTheme,
	IconButton,
	Typography,
	useMediaQuery,
	Slide,
} from '@mui/material'
import { Form, Header, Container, WrapInputs, WrapContent, WrapperChecks } from './style'
import { useRouter } from 'next/router'

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: React.ReactElement<any, any>
	},
	ref: React.Ref<unknown>,
) {
	return <Slide direction='up' ref={ref} {...props} />
})

export const ContactUs = () => {
	const theme = useTheme()
	const { pathname } = useRouter()
	const { t } = useTranslation('common')
	const fullScreen = useMediaQuery(theme.breakpoints.down('sm'))
	const { form, value, setTrue, setFalse, onSubmit, isLoading, dataService } = useContact()

	if (pathname === '/404') {
		return null
	}
	return (
		<>
			<Container data-aos='fade-right'>
				<IconBgTouch />
				<WrapContent>
					<Typography align='center' sx={{ maxWidth: '450px' }} variant='title10' component='h2'>
						{t('let_work_together_on_a_project_with_us')}
					</Typography>
					<Button size='medium' variant='contained' onClick={setTrue}>
						{t('get_in_touch')}
					</Button>
				</WrapContent>
			</Container>
			<Dialog
				open={value}
				maxWidth='sm'
				onClose={setFalse}
				fullScreen={fullScreen}
				TransitionComponent={Transition}
				PaperProps={{
					style: {
						borderRadius: fullScreen ? 0 : '24px',
					},
				}}
			>
				{value && (
					<style jsx global>{`
						html,
						body {
							overflow: hidden;
						}
					`}</style>
				)}
				<Header>
					<IconButton onClick={setFalse}>
						<IconRemove />
					</IconButton>
				</Header>
				<Form onSubmit={form.handleSubmit(onSubmit)}>
					<Typography variant='title20' component='h1'>
						{t('get_in_touch')}
					</Typography>
					<Typography variant='text30' component='h2'>
						{t('fill_up_the_form_and_our_team_will_get_back_to_you_within_24_hours')}
					</Typography>
					<WrapInputs>
						<Input
							fullWidth
							id='first_name'
							name='first_name'
							control={form.control}
							label={t('first_name')}
							placeholder={t('enter_first_name') as string}
						/>
						<Input
							fullWidth
							id='last_name'
							name='last_name'
							label={t('last_name')}
							control={form.control}
							placeholder={t('enter_last_name') as string}
						/>
						<Input
							fullWidth
							id='email'
							name='email'
							type='email'
							control={form.control}
							label={t('your_email')}
							placeholder={t('enter_your_email') as string}
						/>
						<Input
							fullWidth
							id='phone_number'
							name='phone_number'
							control={form.control}
							label={t('phone_number')}
							placeholder={t('enter_phone_number') as string}
						/>
					</WrapInputs>
					<Typography variant='title80' component='h3'>
						{t('what_kind_of_service_do_you_need')}
					</Typography>
					<WrapperChecks>
						{dataService.map(({ id, title }) => (
							<Checkbox key={id} name={`service_${id}`} label={title} control={form.control} />
						))}
					</WrapperChecks>
					<Box display='flex' alignItems='center' justifyContent='flex-end'>
						<Button
							type='submit'
							variant='contained'
							disabled={isLoading}
							style={{ borderRadius: 8 }}
						>
							{t('submit_order')}
						</Button>
					</Box>
				</Form>
			</Dialog>
		</>
	)
}
