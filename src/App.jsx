import React from 'react'
import './app.css'
import PlaceCard from './components/PlaceCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import AppBarMenu from './components/AppBarMenu'

const App = () => {
  return (
    <>
      <AppBarMenu />
      <Container sx={{ marginY: 5 }}>
        <Grid container spacing={3}>
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
          <PlaceCard />
        </Grid>
      </Container>
    </>
  )
}
export default App
