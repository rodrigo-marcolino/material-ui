import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import nz from '../data.json'

const place = (id) => {
  return nz.find((nz) => nz.id === id)
}

const Place = () => {
  return (
    <Container>
      {nz.map((location) => {
        ;<Typography variant="h3" component="h1" marginTop={3}>
          {location.name}
        </Typography>
      })}
    </Container>
  )
}

export default Place
