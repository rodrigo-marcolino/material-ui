import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: 'h6',
          },
          style: {
            fontSize: 27,
          },
        },
        {
          props: {
            variant: 'h4',
          },
          style: {
            fontSize: 32,
            color: 'primary.darker',
          },
        },
      ],
    },
  },
  status: {
    danger: '#e53e3e',
  },
  palette: {
    primary: {
      main: '#a1b6e8',
      darker: '#7186b6',
      Light: '#d3e8ff',
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
