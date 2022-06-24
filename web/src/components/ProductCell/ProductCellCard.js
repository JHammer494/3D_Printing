import { useState } from 'react'
import { Grid, Card } from '@mui/material'

const ProductCellCard = ({ product }) => {
  const [material, setMaterial] = useState(product.Mmp[0].type)
  const [color, setColor] = useState(product.Mmp[0].color)

  return (
    <div>
      <Grid item key={product.id}>
        <Card sx={{ minWidth: 250, maxWidth: 300 }}>
          <h1>{product.title}</h1>
          <ul>
            <li>{product.price}</li>
            <li>{product.time}</li>
          </ul>
          <select>
            <option value={color}>{color}</option>
          </select>
        </Card>
      </Grid>
    </div>
  )
}

export default ProductCellCard
