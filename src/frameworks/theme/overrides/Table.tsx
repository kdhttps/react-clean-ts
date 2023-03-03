import { MiTheme } from '../prototype'

export default function Table(theme: MiTheme) {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette.text.secondary,
          backgroundColor: theme.palette.background.neutral,
        },
      },
    },
  }
}
