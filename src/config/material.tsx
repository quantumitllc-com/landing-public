import { createTheme } from '@mui/material/styles'
import { IconChecked } from '@/assets/icons/checked'
import { IconUnchecked } from '@/assets/icons/unchecked'
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
		text60: React.CSSProperties
		text70: React.CSSProperties
		text80: React.CSSProperties
		title: React.CSSProperties
		title10: React.CSSProperties
		title20: React.CSSProperties
		title30: React.CSSProperties
		title40: React.CSSProperties
		title50: React.CSSProperties
		title60: React.CSSProperties
		title70: React.CSSProperties
		title80: React.CSSProperties
		title90: React.CSSProperties
		title100: React.CSSProperties
	}

	interface TypographyVariantsOptions {
		text: React.CSSProperties
		text10: React.CSSProperties
		text20: React.CSSProperties
		text30: React.CSSProperties
		text40: React.CSSProperties
		text50: React.CSSProperties
		text60: React.CSSProperties
		text70: React.CSSProperties
		text80: React.CSSProperties
		title: React.CSSProperties
		title10: React.CSSProperties
		title20: React.CSSProperties
		title30: React.CSSProperties
		title40: React.CSSProperties
		title50: React.CSSProperties
		title60: React.CSSProperties
		title70: React.CSSProperties
		title80: React.CSSProperties
		title90: React.CSSProperties
		title100: React.CSSProperties
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
		text60: true
		text70: true
		text80: true
		title: true
		title10: true
		title20: true
		title30: true
		title40: true
		title50: true
		title60: true
		title70: true
		title80: true
		title90: true
		title100: true
	}
}

const defaultCreateTheme = createTheme({
	palette: {
		primary: {
			main: VARIABLES_CSS.COLORS.GREEN,
		},
		colors: VARIABLES_CSS.COLORS,
	},
	breakpoints: VARIABLES_CSS.BREAKPOINTS,
})

export const theme = createTheme({
	palette: defaultCreateTheme.palette,
	breakpoints: VARIABLES_CSS.BREAKPOINTS,
	typography: {
		text: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '24px',
			color: defaultCreateTheme.palette.colors.GRAY40,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '11px',
				lineHeight: '15px',
			},
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
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '14px',
			},
		},
		text40: {
			fontWeight: 500,
			fontSize: '18px',
			lineHeight: '157.7%',
			letterSpacing: '0.0035em',
			color: defaultCreateTheme.palette.colors.GRAY90,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '13px',
				fontWeight: 400,
			},
		},
		text50: {
			fontWeight: 500,
			fontSize: '16px',
			lineHeight: '157.7%',
			letterSpacing: '0.0035em',
			color: defaultCreateTheme.palette.colors.GRAY90,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '13px',
				fontWeight: 400,
			},
		},
		text60: {
			fontWeight: 400,
			fontSize: '15px',
			lineHeight: '154.7%',
			color: defaultCreateTheme.palette.colors.GRAY90,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '12px',
				fontWeight: 400,
			},
		},
		text70: {
			fontWeight: 500,
			fontSize: '18px',
			lineHeight: '20px',
			color: defaultCreateTheme.palette.colors.BLUE30,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '14px',
				fontWeight: 400,
			},
		},
		text80: {
			fontWeight: 400,
			fontSize: '18px',
			lineHeight: '154.7%',
			color: defaultCreateTheme.palette.colors.GRAY90,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '12px',
				lineHeight: ' 148.7%',
			},
		},
		title: {
			fontWeight: 600,
			fontSize: '18px',
			lineHeight: '21px',
			color: defaultCreateTheme.palette.colors.WHITE,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				lineHeight: '16px',
				fontSize: '13.3523px',
			},
		},
		title10: {
			fontWeight: 600,
			fontSize: '36px',
			textAlign: 'center',
			lineHeight: '116.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '28px',
				lineHeight: '106.7%',
			},
		},
		title20: {
			fontWeight: 600,
			fontSize: '42px',
			lineHeight: '50px',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '24px',
				lineHeight: '31px',
			},
		},
		title30: {
			fontWeight: 600,
			fontSize: '14px',
			lineHeight: '116.7%',
			textTransform: 'uppercase',
			color: defaultCreateTheme.palette.colors.GREEN,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '12px',
			},
		},
		title40: {
			fontWeight: 600,
			fontSize: '42px',
			lineHeight: '117.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '28px',
				lineHeight: '106.7%',
			},
		},
		title50: {
			fontWeight: 600,
			fontSize: '36px',
			lineHeight: '116.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '28px',
				lineHeight: '106.7%',
			},
		},
		title60: {
			fontWeight: 600,
			fontSize: '58px',
			lineHeight: '67.69px',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '28px',
				lineHeight: '98.7%',
			},
		},
		title70: {
			fontWeight: 600,
			fontSize: '20px',
			lineHeight: '116.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '16px',
			},
		},
		title80: {
			fontWeight: 600,
			fontSize: '16px',
			lineHeight: '151.5%',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontWeight: 500,
			},
		},
		title90: {
			fontWeight: 600,
			fontSize: '26px',
			lineHeight: '116.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '16px',
			},
		},
		title100: {
			fontWeight: 600,
			fontSize: '24px',
			lineHeight: '116.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '14px',
			},
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
					props: { variant: 'contained' },
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
						[defaultCreateTheme.breakpoints.down('sm')]: {
							height: '42px',
							fontSize: '14px',
						},
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
		MuiCheckbox: {
			defaultProps: {
				icon: <IconUnchecked />,
				checkedIcon: <IconChecked />,
			},
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
		MuiOutlinedInput: {
			styleOverrides: {
				root: {
					borderRadius: '8px',
					'& fieldset': {
						borderWidth: '1px',
						borderColor: defaultCreateTheme.palette.colors.GRAY120,
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
		MuiInputLabel: {
			styleOverrides: {
				root: {
					top: '-4px',
				},
				shrink: {
					top: '0',
					fontWeight: 400,
					color: `${defaultCreateTheme.palette.colors.BLUE20} !important`,
				},
			},
		},
	},
})
