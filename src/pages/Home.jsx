import Typography from '@mui/material/Typography'
import PlaceCard from '../components/PlaceCard'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import nz from '../data.json'

const Home = () => {
  return (
    <>
      <Container sx={{ marginY: 5 }}>
        {nz.map((location) => (
          <>
            <Typography variant="h4" component="h2" marginTop={5} marginBottom={3}>
              Must visit in {location.region}
            </Typography>
            <Grid container direction="row" justifyContent="space-around" alignItems="stretch" spacing={3} xs="auto">
              {location.places.map((place) => (
                <PlaceCard place={place} key={place.id} />
              ))}
            </Grid>
          </>
        ))}
      </Container>
    </>
  )
}

export default Home
