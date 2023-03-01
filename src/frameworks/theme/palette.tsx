import { alpha } from '@mui/material/styles'

// SETUP COLORS
const GREY = {
  0: '#FFFFFF',
  100: '#F9FAFB',
  200: '#F4F6F8',
  300: '#DFE3E8',
  400: '#C4CDD5',
  500: '#919EAB',
  600: '#637381',
  700: '#454F5B',
  800: '#212B36',
  900: '#161C24',
}

const PRIMARY = {
  lighter: '#a5d6a7',
  light: '#66bb6a',
  main: '#43a047',
  dark: '#388e3c',
  darker: '#2e7d32',
  contrastText: '#fff',
}

const SECONDARY = {
  lighter: '#80cbc4',
  light: '#26a69a',
  main: '#00897b',
  dark: '#00796b',
  darker: '#00695c',
  contrastText: '#fff',
}

const INFO = {
  lighter: '#D0F2FF',
  light: '#74CAFF',
  main: '#1890FF',
  dark: '#0C53B7',
  darker: '#04297A',
  contrastText: '#fff',
}

const SUCCESS = {
  lighter: '#E9FCD4',
  light: '#AAF27F',
  main: '#54D62C',
  dark: '#229A16',
  darker: '#08660D',
  contrastText: GREY[800],
}

const WARNING = {
  lighter: '#FFF7CD',
  light: '#FFE16A',
  main: '#FFC107',
  dark: '#B78103',
  darker: '#7A4F01',
  contrastText: GREY[800],
}

const ERROR = {
  lighter: '#FFE7D9',
  light: '#FFA48D',
  main: '#FF4842',
  dark: '#B72136',
  darker: '#7A0C2E',
  contrastText: '#fff',
}

const palette = {
  common: { black: '#000', white: '#fff' },
  primary: PRIMARY,
  secondary: SECONDARY,
  info: INFO,
  success: SUCCESS,
  warning: WARNING,
  error: ERROR,
  grey: GREY,
  divider: alpha(GREY[500], 0.24),
  text: {
    primary: GREY[800],
    secondary: GREY[600],
    disabled: GREY[500],
  },
  background: {
    paper: '#fff',
    default: GREY[100],
    neutral: GREY[200],
  },
  action: {
    active: PRIMARY.main,
    hover: alpha(PRIMARY.light, 0.08),
    selected: alpha(PRIMARY.light, 0.16),
    disabled: alpha(PRIMARY.light, 0.8),
    disabledBackground: alpha(PRIMARY.light, 0.24),
    focus: alpha(PRIMARY.light, 0.24),
    hoverOpacity: 0.08,
    disabledOpacity: 0.48,
  },
}

export default palette
