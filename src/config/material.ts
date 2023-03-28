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

declare module '@mui/material/styles' {
	interface TypographyVariants {
		text: React.CSSProperties
		text10: React.CSSProperties
		text20: React.CSSProperties
		text30: React.CSSProperties
		text40: React.CSSProperties
		text50: React.CSSProperties
		title: React.CSSProperties
		title10: React.CSSProperties
		title20: React.CSSProperties
		title30: React.CSSProperties
		title40: React.CSSProperties
		title50: React.CSSProperties
		title60: React.CSSProperties
	}

	interface TypographyVariantsOptions {
		text: React.CSSProperties
		text10: React.CSSProperties
		text20: React.CSSProperties
		text30: React.CSSProperties
		text40: React.CSSProperties
		text50: React.CSSProperties
		title: React.CSSProperties
		title10: React.CSSProperties
		title20: React.CSSProperties
		title30: React.CSSProperties
		title40: React.CSSProperties
		title50: React.CSSProperties
		title60: React.CSSProperties
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		text: true
		text10: true
		text20: true
		text30: true
		text40: true
		text50: true
		title: true
		title10: true
		title20: true
		title30: true
		title40: true
		title50: true
		title60: true
	}
}

const defaultCreateTheme = {
	palette: {
		primary: {
			main: VARIABLES_CSS.COLORS.GREEN,
		},
		colors: VARIABLES_CSS.COLORS,
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 1100,
			lg: 1200,
			xl: 1536,
		},
	},
}

export const theme = createTheme({
	palette: defaultCreateTheme.palette,
	breakpoints: defaultCreateTheme.breakpoints,
	typography: {
		text: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '24px',
			color: defaultCreateTheme.palette.colors.GRAY40,
		},
		text10: {
			fontWeight: 400,
			fontSize: '12px',
			lineHeight: '16px',
			color: defaultCreateTheme.palette.colors.GRAY50,
		},
		text20: {
			fontWeight: 500,
			fontSize: '16px',
			lineHeight: '21px',
			color: defaultCreateTheme.palette.colors.WHITE,
		},
		text30: {
			fontWeight: 300,
			fontSize: '16px',
			lineHeight: '151.5%',
			color: defaultCreateTheme.palette.colors.GRAY80,
		},
		text40: {
			fontWeight: 500,
			fontSize: '18px',
			lineHeight: '157.7%',
			letterSpacing: '0.0035em',
			color: defaultCreateTheme.palette.colors.GRAY90,
		},
		text50: {
			fontWeight: 500,
			fontSize: '16px',
			lineHeight: '157.7%',
			letterSpacing: '0.0035em',
			color: defaultCreateTheme.palette.colors.GRAY90,
		},
		title: {
			fontWeight: 600,
			fontSize: '18px',
			lineHeight: '21px',
			color: defaultCreateTheme.palette.colors.WHITE,
		},
		title10: {
			fontWeight: 600,
			fontSize: '36px',
			textAlign: 'center',
			lineHeight: '116.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
		},
		title20: {
			fontWeight: 600,
			fontSize: '42px',
			lineHeight: '50px',
			color: defaultCreateTheme.palette.colors.BLUE20,
		},
		title30: {
			fontWeight: 600,
			fontSize: '14px',
			lineHeight: '116.7%',
			textTransform: 'uppercase',
			color: defaultCreateTheme.palette.colors.GREEN,
		},
		title40: {
			fontWeight: 600,
			fontSize: '42px',
			lineHeight: '117.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
		},
		title50: {
			fontWeight: 600,
			fontSize: '36px',
			lineHeight: '116.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
		},
		title60: {
			fontWeight: 600,
			fontSize: '58px',
			lineHeight: '67.69px',
			color: defaultCreateTheme.palette.colors.BLUE20,
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					boxShadow: 'none',
					textTransform: 'capitalize',
					'&:hover': {
						boxShadow: 'none',
					},
					'&.Mui-disabled:hover': {
						boxShadow: 'none !important',
					},
				},
			},
			variants: [
				{
					props: { variant: 'contained', size: 'large' },
					style: {
						height: 55,
						fontWeight: 600,
						fontSize: '16px',
						lineHeight: '114.5%',
						borderRadius: '100px',
						letterSpacing: '0.0035em',
						color: defaultCreateTheme.palette.colors.BLUE10,
					},
				},
				{
					props: { variant: 'contained', size: 'medium' },
					style: {
						height: 48,
						fontWeight: 600,
						fontSize: '15px',
						lineHeight: '114.5%',
						borderRadius: '33px',
						letterSpacing: '0.0035em',
						color: defaultCreateTheme.palette.colors.BLUE20,
					},
				},
				{
					props: { variant: 'contained', size: 'small' },
					style: {
						height: 36,
						fontWeight: 600,
						fontSize: '12px',
						lineHeight: '14px',
						borderRadius: '30px',
						letterSpacing: '0.0035em',
						color: defaultCreateTheme.palette.colors.BLUE,
					},
				},
			],
		},
		MuiDialog: {
			defaultProps: {
				PaperProps: {
					style: {
						boxShadow: 'none',
						overflow: 'hidden',
						borderRadius: '24px',
					},
				},
				BackdropProps: {
					style: {
						backdropFilter: 'blur(5px)',
						backgroundColor: defaultCreateTheme.palette.colors.GRAY70,
					},
				},
			},
		},
		MuiInputBase: {
			styleOverrides: {
				input: {
					paddingTop: '12.5px !important',
					paddingBottom: '12.5px !important',
				},
			},
		},
	},
})
