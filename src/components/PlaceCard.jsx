import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

export default function PlaceCard({ place }) {
  return (
    <Grid item xs={3} xs="auto" alignItems="stretch" sx={{pt:"1rem"}}>
      <Card sx={{ width: 345}}>
        <CardActionArea>
          <CardMedia component="img" image={place.image} alt="img" className="img" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {place.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {/* {place.about} */}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Stack spacing={1}>
              <Rating name="size-medium" defaultValue={place.rating} />
            </Stack>
          </Button>
          <Typography variant="caption" marginTop={0.5}>
            {place.numberOfReviews}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  )
}
