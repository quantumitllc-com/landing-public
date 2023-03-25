import { createTheme } from '@mui/material/styles'
import { VARIABLES_CSS } from '@/constants/variables-css'

declare module '@mui/material/styles/createPalette' {
	interface Palette {
		colors: typeof VARIABLES_CSS.COLORS
	}
	interface PaletteOptions {
		colors: typeof VARIABLES_CSS.COLORS
	}
}

export const theme = createTheme({
	palette: {
		primary: {
			main: VARIABLES_CSS.COLORS.GREEN,
		},
		colors: VARIABLES_CSS.COLORS,
	},
})
