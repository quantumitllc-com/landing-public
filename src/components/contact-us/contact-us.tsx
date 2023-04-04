import { useContact } from './useContact'
import { Input } from '@/components/input'
import { Checkbox } from '@/components/checkbox'
import { IconSpread } from '@/assets/icons/spread'
import { IconRemove } from '@/assets/icons/remove'
import { IconBgTouch } from '@/assets/icons/bg-touch'
import { Box, Button, Dialog, IconButton, Typography } from '@mui/material'
import {
	Form,
	Header,
	Container,
	WrapInputs,
	WrapContent,
	WrapperChecks,
	WrapButtonRequest,
} from './style'

interface IContact {
	variant: 'contact' | 'touch' | 'request'
}

export const ContactUs = ({ variant }: IContact) => {
	const { form, value, setTrue, setFalse, onSubmit, isLoading } = useContact()

	return (
		<>
			{variant === 'contact' ? (
				<Button size='large' variant='contained' onClick={setTrue}>
					Contact Us
				</Button>
			) : variant === 'request' ? (
				<WrapButtonRequest>
					<Box display='flex' alignItems='center' className='icon-spread' justifyContent='center'>
						<IconSpread />
					</Box>
					<Button
						onClick={setTrue}
						variant='contained'
						style={{
							textTransform: 'unset',
						}}
					>
						Request a quote
					</Button>
				</WrapButtonRequest>
			) : (
				<Container>
					<IconBgTouch />
					<WrapContent>
						<Typography sx={{ maxWidth: '450px' }} variant='title10' component='h2'>
							Let’s work together on a project with us
						</Typography>
						<Button size='medium' variant='contained' onClick={setTrue}>
							Get in touch
						</Button>
					</WrapContent>
				</Container>
			)}
			<Dialog open={value} onClose={setFalse} maxWidth='md'>
				<Header>
					<IconButton onClick={setFalse}>
						<IconRemove />
					</IconButton>
				</Header>
				<Form onSubmit={form.handleSubmit(onSubmit)}>
					<Typography variant='title20' component='h1'>
						Get in touch
					</Typography>
					<Typography variant='text30' component='h2'>
						Fill up the form and our Team will get back to you within 24 hours.
					</Typography>
					<WrapInputs>
						<Input
							fullWidth
							id='first_name'
							name='first_name'
							label='First name'
							control={form.control}
							placeholder='Enter first name'
						/>
						<Input
							fullWidth
							id='last_name'
							name='last_name'
							label='Last name'
							control={form.control}
							placeholder='Enter last name'
						/>
						<Input
							fullWidth
							id='email'
							name='email'
							type='email'
							label='Your email'
							control={form.control}
							placeholder='Enter your email'
						/>
						<Input
							fullWidth
							id='phone_number'
							name='phone_number'
							label='Phone number'
							control={form.control}
							placeholder='Enter phone number'
						/>
					</WrapInputs>
					<Typography variant='title80' component='h3'>
						What kind of service do you need?
					</Typography>
					<WrapperChecks>
						<Checkbox name='service' label='Web design' control={form.control} />
						<Checkbox name='service' label='Mobile application' control={form.control} />
						<Checkbox name='service' label='Web development' control={form.control} />
						<Checkbox name='service' label='Other' control={form.control} />
					</WrapperChecks>
					<Box display='flex' alignItems='center' justifyContent='flex-end'>
						<Button
							type='submit'
							variant='contained'
							disabled={isLoading}
							style={{ borderRadius: 8 }}
						>
							Submit order
						</Button>
					</Box>
				</Form>
			</Dialog>
		</>
	)
}
