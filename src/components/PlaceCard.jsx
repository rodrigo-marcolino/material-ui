import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, CardActions } from '@mui/material'
import Grid from '@mui/material/Grid'
import Rating from '@mui/material/Rating'
import Stack from '@mui/material/Stack'

export default function PlaceCard() {
  return (
    <Grid item xs={3}>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            image="https://www.firstlighttravel.com/sites/default/files/2018-11/bay-of-islands.jpg"
            alt="img"
            className="img"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Waiheke Island
            </Typography>
            <Typography variant="body2" color="text.secondary">
              A mix of delectable vineyards, eclectic art, and golden beaches, even though Waiheke Island is an easy
              35‐minute ferry ride from Auckland, you’ll feel a world away from the big city bustle. Tour the many
              premium wineries on the island, relax on a secluded beach or fly over the treetops on a thrilling zip‐line
              ride, offering breathtaking views of the surrounding paradise.
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            <Stack spacing={1}>
              <Rating name="size-medium" defaultValue={2} />
            </Stack>
          </Button>
          <Typography variant="caption" marginTop={0.5}>
            100
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  )
}
