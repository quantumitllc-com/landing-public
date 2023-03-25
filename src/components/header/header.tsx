import { Box } from '@mui/material'
import { Navbar } from '@/components/navbar'
import { Wrap, Wrapper, Container } from './style'
import { ContactUs } from '@/components/contact-us'
import { LanguageSelect } from '@/components/language-select'
import { IconLogoVertical } from '@/assets/icons/logo-vertical'

export const Header = () => {
	return (
		<Container>
			<Wrapper>
				<Wrap>
					<IconLogoVertical />
					<Navbar variant='header' />
					<Box gap='14px' display='flex'>
						<LanguageSelect />
						<ContactUs />
					</Box>
				</Wrap>
			</Wrapper>
		</Container>
	)
}
