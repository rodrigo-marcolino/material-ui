import React from 'react'
import './app.css'
import PlaceCard from './components/PlaceCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'

const App = () => {
  return (
    <>
      <Container>
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
