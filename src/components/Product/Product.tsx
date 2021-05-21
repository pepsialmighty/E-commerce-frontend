import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

import { ProductProps } from './Product.type'

import './Product.scss'

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 12,
  },
  media: {
    height: 250,
  },
})

const Product = ({ productData }: ProductProps) => {
  const classes = useStyles()

  return (
    <Card className={`${classes.root} product`}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={productData?.imageUrl}
          title={productData?.name}
        />
        <CardContent
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            maxHeight: 125,
          }}
        >
          <Typography gutterBottom variant="h5" component="h2">
            {productData?.name}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            style={{ minHeight: 50 }}
          >
            {productData?.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to={`/products/${productData?._id}`}>
          <Button size="small" color="primary">
            View
          </Button>
        </Link>
      </CardActions>
    </Card>
  )
}

export default Product
