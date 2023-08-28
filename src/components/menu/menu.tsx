import { Navbar } from '@/components/navbar'
import { IconMenu } from '@/assets/icons/menu'
import { Socials } from '@/components/socials'
import { useBoolean } from '@/hooks/useBoolean'
import { IconClear } from '@/assets/icons/clear'
import { Wrapper, Header, Container } from './style'
import { SelectLanguage } from '@/components/select-language'
import { useTheme, IconButton, SwipeableDrawer, useMediaQuery } from '@mui/material'

export const Menu = () => {
	const theme = useTheme()
	const { value, setTrue, setFalse } = useBoolean()
	const matches = useMediaQuery(theme.breakpoints.up('lg'))

	if (matches) {
		return null
	}

	return (
		<>
			<IconButton
				onClick={setTrue}
				sx={theme => ({
					':hover': {
						svg: {
							g: {
								path: {
									transition: 'fill 0.5s ease',
									fill: theme.palette.colors.GREEN,
								},
							},
						},
					},
				})}
			>
				<IconMenu />
			</IconButton>
			<SwipeableDrawer
				open={value}
				anchor='right'
				onOpen={setTrue}
				onClose={setFalse}
				PaperProps={{
					sx: theme => ({
						width: '100%',
						backdropFilter: 'blur(35px)',
						background: theme.palette.colors.GREEN10,
					}),
				}}
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
