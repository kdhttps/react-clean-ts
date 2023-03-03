import { MiTheme } from '../prototype'

export default function Autocomplete(theme: MiTheme) {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        paper: {
          boxShadow: theme.customShadows.z20,
        },
      },
    },
  }
}
