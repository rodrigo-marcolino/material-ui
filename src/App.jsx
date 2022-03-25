import React from 'react'
import './app.css'
import Typography from '@mui/material/Typography'
import PlaceCard from './components/PlaceCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import AppBarMenu from './components/AppBarMenu'
import nz from './data.json'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import theme from './theme'

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <AppBarMenu />
        <Container sx={{ marginY: 5 }}>
          {nz.map((location) => (
            <>
              <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
                Must visit in {location.region}
              </Typography>
              <Grid container direction="row" justifyContent="center" alignItems="center" spacing={3} xs="auto">
                {location.places.map((place) => (
                  <PlaceCard place={place} key={place.id} />
                ))}
              </Grid>
            </>
          ))}
        </Container>
      </ThemeProvider>
    </>
  )
}
export default App
