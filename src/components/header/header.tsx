import { Box } from '@mui/material'
import { Menu } from '@/components/menu'
import { Navbar } from '@/components/navbar'
import { ContactUs } from '@/components/contact-us'
import { SelectLanguage } from '@/components/select-language'
import { IconLogoVertical } from '@/assets/icons/logo-vertical'
import { IconLogoVerticalMobile } from '@/assets/icons/logo-vertical-mobile'
import { Wrap, Wrapper, WrapLogo, Container, WrapMobile, WrapDesktop } from './style'

export const Header = () => {
	return (
		<Container>
			<Wrapper>
				<Wrap>
					<WrapLogo>
						<Box display='flex' alignItems='center' className='logo'>
							<IconLogoVertical />
						</Box>
						<Box display='flex' alignItems='center' className='logo-mobile'>
							<IconLogoVerticalMobile />
						</Box>
					</WrapLogo>
					<WrapDesktop>
						<Navbar variant='header' />
						<Box gap='14px' display='flex' alignItems='center'>
							<SelectLanguage variant='header' />
							<ContactUs variant='contact' />
						</Box>
					</WrapDesktop>
					<WrapMobile>
						<Menu />
					</WrapMobile>
				</Wrap>
			</Wrapper>
		</Container>
	)
}
