import { Navbar } from '@/components/navbar'
import { Socials } from '@/components/socials'
import { IconMenu } from '@/assets/icons/menu'
import { useBoolean } from '@/hooks/useBoolean'
import { IconClear } from '@/assets/icons/clear'
import { Wrapper, Header, Container } from './style'
import { IconButton, SwipeableDrawer } from '@mui/material'
import { SelectLanguage } from '@/components/select-language'

export const Menu = () => {
	const { value, setTrue, setFalse } = useBoolean()

	return (
		<>
			<IconButton onClick={setTrue}>
				<IconMenu />
			</IconButton>
			<SwipeableDrawer
				open={value}
				anchor='right'
				onOpen={setTrue}
				onClose={setFalse}
				PaperProps={{ style: { width: '100%' } }}
			>
				<Container>
					{value && (
						<style jsx global>{`
							html,
							body {
								overflow: hidden;
							}
						`}</style>
					)}
					<Header>
						<SelectLanguage variant='drawer-mobile' />
						<IconButton onClick={setFalse}>
							<IconClear />
						</IconButton>
					</Header>
					<Wrapper>
						<Navbar variant='drawer-mobile' onClick={setFalse} />
						<Socials variant='drawer-mobile' />
					</Wrapper>
				</Container>
			</SwipeableDrawer>
		</>
	)
}
