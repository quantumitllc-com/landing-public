import { useBoolean } from '@/hooks/useBoolean'
import { IconRemove } from '@/assets/icons/remove'
import { IconBgTouch } from '@/assets/icons/bg-touch'
import { Form, Header, Container, WrapInputs, WrapContent } from './style'
import { Box, Button, Dialog, IconButton, TextField, Typography } from '@mui/material'

interface IContact {
	variant: 'contact' | 'touch'
}

export const ContactUs = ({ variant }: IContact) => {
	const { value, setTrue, setFalse } = useBoolean()

	return (
		<>
			{variant === 'contact' ? (
				<Button size='large' variant='contained' onClick={setTrue}>
					Contact Us
				</Button>
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
			<Dialog open={value} onClose={setFalse}>
				<Header>
					<IconButton onClick={setFalse}>
						<IconRemove />
					</IconButton>
				</Header>
				<Form>
					<Typography variant='title20' component='h1'>
						Get in touch
					</Typography>
					<Typography variant='text30' component='h2'>
						Fill up the form and our Team will get back to you within 24 hours.
					</Typography>
					<WrapInputs>
						<TextField label='First name' placeholder='Enter last name' />
						<TextField label='Last name' placeholder='Enter last name' />
						<TextField label='Your email' placeholder='Enter your email' />
						<TextField type='email' label='Phone number' placeholder='Enter phone number' />
					</WrapInputs>
					<Box display='flex' alignItems='center' justifyContent='flex-end'>
						<Button variant='contained' style={{ borderRadius: 8 }}>
							Submit order
						</Button>
					</Box>
				</Form>
			</Dialog>
		</>
	)
}
