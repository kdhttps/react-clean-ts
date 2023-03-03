import { Palette, Theme } from '@mui/material'

export interface MiTheme extends Theme {
  customShadows: {
    z1: string
    z4: string
    z8: string
    z12: string
    z16: string
    z20: string
    z24: string
    primary: string
    info: string
    secondary: string
    success: string
    warning: string
    error: string
    card: string
    dialog: string
    dropdown: string
  }
  palette: Palette & { background: { default: string; paper: string; neutral: string } }
}
