import { createTheme } from '@mui/material'
import { ptBR } from '@mui/material/locale'

export const Theme = createTheme(
  {
    palette: {
      primary: {
        main: '#102635',
        contrastText: '#FFFFFF',
      },
      secondary: {
        main: '#e1a02c',
        contrastText: '#FFFFFF',
      },
      background: { default: '#bab6a8', paper: '#f0eeec' },
    },
  },
  ptBR,
)
