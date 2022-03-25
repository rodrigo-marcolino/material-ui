import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#e1bee7',
      darker: '#af8eb5',
      Light: '#fff1ff',
    },
    secondary: {
      main: '#e1f5fe',
      darker: '#afc2cb',
      Light: '#ffffff',
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
})

export default theme
