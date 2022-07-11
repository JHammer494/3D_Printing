import { Grid } from '@mui/material'

import ProductCellCard from './ProductCellCard'

export const QUERY = gql`
  query FindProductQuery {
    products: products {
      id
      image_id
      Mmp {
        material {
          id
          type
        }
      }
      price
      size_id
      time
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ products }) => {
  // console.log('in success')
  const productListings = products.map((data) => {
    return <ProductCellCard product={data} key={data.id} />
  })
  return (
    <Grid
      container
      direction="row"
      spacing={2}
      sx={{ justifyContent: 'center', p: 2 }}
    >
      {productListings}
    </Grid>
  )
}
