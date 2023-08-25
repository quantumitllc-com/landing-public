import { CSS } from '@/constants/css'
import { createTheme } from '@mui/material/styles'
import { IconChecked } from '@/assets/icons/checked'
import { IconUnchecked } from '@/assets/icons/unchecked'

declare module '@mui/material/styles/createPalette' {
	interface Palette {
		colors: typeof CSS.COLORS
		fontsizes: typeof CSS.FONNTSIZES
		letterspaces: typeof CSS.LETTERSPACES
		lineheights: typeof CSS.LINEHEIGHTS
		fontweights: typeof CSS.FONTWEIGHTS
		borderradiuses: typeof CSS.BORDERRADIUSES
		shadows: typeof CSS.SHADOWS
	}
	interface PaletteOptions {
		colors: typeof CSS.COLORS
		fontsizes: typeof CSS.FONNTSIZES
		letterspaces: typeof CSS.LETTERSPACES
		lineheights: typeof CSS.LINEHEIGHTS
		fontweights: typeof CSS.FONTWEIGHTS
		borderradiuses: typeof CSS.BORDERRADIUSES
		shadows: typeof CSS.SHADOWS
	}
}

interface ITypography {
	text: React.CSSProperties
	text10: React.CSSProperties
	text20: React.CSSProperties
	text30: React.CSSProperties
	text40: React.CSSProperties
	text50: React.CSSProperties
	text60: React.CSSProperties
	text70: React.CSSProperties
	text80: React.CSSProperties
	text90: React.CSSProperties
	text100: React.CSSProperties
	text110: React.CSSProperties
	text120: React.CSSProperties
	text130: React.CSSProperties
	text140: React.CSSProperties
	text150: React.CSSProperties
	text160: React.CSSProperties
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
	title110: React.CSSProperties
	title120: React.CSSProperties
	title130: React.CSSProperties
	title140: React.CSSProperties
	title150: React.CSSProperties
	title160: React.CSSProperties
	title170: React.CSSProperties
	title180: React.CSSProperties
}

declare module '@mui/material/styles' {
	interface TypographyVariants extends ITypography {}
	interface TypographyVariantsOptions extends ITypography {}
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
		text90: true
		text100: true
		text110: true
		text120: true
		text130: true
		text140: true
		text150: true
		text160: true
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
		title110: true
		title120: true
		title130: true
		title140: true
		title150: true
		title160: true
		title170: true
		title180: true
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		mainGreen: true
	}
}

const defaultCreateTheme = createTheme({
	palette: {
		primary: {
			main: CSS.COLORS.GREEN,
		},
		colors: CSS.COLORS,
		fontsizes: CSS.FONNTSIZES,
		letterspaces: CSS.LETTERSPACES,
		lineheights: CSS.LINEHEIGHTS,
		fontweights: CSS.FONTWEIGHTS,
		borderradiuses: CSS.BORDERRADIUSES,
		shadows: CSS.SHADOWS,
	},
	breakpoints: CSS.BREAKPOINTS,
})

export const theme = createTheme({
	palette: defaultCreateTheme.palette,
	breakpoints: CSS.BREAKPOINTS,
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
				lineHeight: '148.7%',
			},
		},
		text90: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '154.7%',
			color: defaultCreateTheme.palette.colors.GRAY180,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '12px',
				lineHeight: '152.7%',
			},
		},
		text100: {
			fontWeight: 400,
			fontSize: '15px',
			lineHeight: '171.7%',
			letterSpacing: '0.0035em',
			color: defaultCreateTheme.palette.colors.GRAY90,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '12px',
				lineHeight: '149.7%',
			},
		},
		text110: {
			fontWeight: 500,
			fontSize: '18px',
			lineHeight: '21px',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '12px',
				lineHeight: '14px',
			},
		},
		text120: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '152.7%',
			letterSpacing: '0.0035em',
			color: defaultCreateTheme.palette.colors.GRAY200,
		},
		text130: {
			fontWeight: 500,
			fontSize: '14px',
			lineHeight: '152.7%',
			letterSpacing: '0.0035em',
			color: defaultCreateTheme.palette.colors.WHITE,
		},
		text140: {
			fontWeight: 500,
			fontSize: '18px',
			lineHeight: '154.7%',
			color: defaultCreateTheme.palette.colors.BLUE40,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '13px',
				lineHeight: '142.7%',
			},
		},
		text150: {
			color: defaultCreateTheme.palette.colors.WHITE10,
			fontSize: defaultCreateTheme.palette.fontsizes[18],
			fontWeight: defaultCreateTheme.palette.fontweights[500],
			lineHeight: defaultCreateTheme.palette.lineheights['155.7%'],
			[defaultCreateTheme.breakpoints.down('sm')]: {
				textAlign: 'center',
				fontSize: defaultCreateTheme.palette.fontsizes[13],
			},
			[defaultCreateTheme.breakpoints.between('sm', 'md')]: {
				fontSize: defaultCreateTheme.palette.fontsizes[16],
			},
		},
		text160: {
			color: defaultCreateTheme.palette.colors.GRAY180,
			fontSize: defaultCreateTheme.palette.fontsizes[18],
			fontWeight: defaultCreateTheme.palette.fontweights[400],
			lineHeight: defaultCreateTheme.palette.lineheights['154.7%'],
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: defaultCreateTheme.palette.fontsizes[13],
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
		title110: {
			fontWeight: 600,
			fontSize: '18px',
			lineHeight: '116.7%',
			color: defaultCreateTheme.palette.colors.WHITE,
		},
		title120: {
			fontWeight: 500,
			fontSize: '24px',
			lineHeight: '28px',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '16px',
				lineHeight: '19px',
			},
		},
		title130: {
			fontWeight: 500,
			fontSize: '18px',
			lineHeight: '114.5%',
			letterSpacing: '0.0035em',
			color: defaultCreateTheme.palette.colors.BLUE10,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '14px',
			},
		},
		title140: {
			fontWeight: 600,
			fontSize: '36px',
			lineHeight: '116.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '18px',
			},
		},
		title150: {
			fontWeight: 600,
			fontSize: '18px',
			lineHeight: '116.7%',
			color: defaultCreateTheme.palette.colors.BLUE20,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: '13px',
			},
		},
		title160: {
			fontWeight: 500,
			fontSize: '14px',
			lineHeight: '154.7%',
			color: defaultCreateTheme.palette.colors.GRAY90,
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontWeight: 400,
				fontSize: '11px',
			},
		},
		title170: {
			color: defaultCreateTheme.palette.colors.WHITE,
			fontSize: defaultCreateTheme.palette.fontsizes[48],
			fontWeight: defaultCreateTheme.palette.fontweights[800],
			lineHeight: defaultCreateTheme.palette.lineheights['116.7%'],
			[defaultCreateTheme.breakpoints.down('sm')]: {
				textAlign: 'center',
				fontSize: defaultCreateTheme.palette.fontsizes[26],
			},
			[defaultCreateTheme.breakpoints.between('sm', 'md')]: {
				fontSize: defaultCreateTheme.palette.fontsizes[33],
			},
		},
		title180: {
			color: defaultCreateTheme.palette.colors.WHITE,
			fontSize: defaultCreateTheme.palette.fontsizes[33],
			fontWeight: defaultCreateTheme.palette.fontweights[800],
			lineHeight: defaultCreateTheme.palette.lineheights['116.7%'],
			[defaultCreateTheme.breakpoints.down('sm')]: {
				fontSize: defaultCreateTheme.palette.fontsizes[18],
			},
		},
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					height: 48,
					boxShadow: 'none',
					whiteSpace: 'nowrap',
					minWidth: 'fit-content',
					textTransform: 'inherit',
					borderRadius: defaultCreateTheme.palette.borderradiuses[33],
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
				{
					props: { variant: 'mainGreen' },
					style: {
						color: defaultCreateTheme.palette.colors.BLUE20,
						fontSize: defaultCreateTheme.palette.fontsizes[15],
						fontWeight: defaultCreateTheme.palette.fontweights[600],
						backgroundColor: defaultCreateTheme.palette.colors.GREEN,
						lineHeight: defaultCreateTheme.palette.lineheights['114.5%'],
						letterSpacing: defaultCreateTheme.palette.letterspaces[0.052],
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
