import { useEffect, useState } from 'react'

import {
  Grid,
  Card,
  CircularProgress,
  MenuItem,
  Select,
  TextField,
  FormControl,
} from '@mui/material'
import { alignProperty } from '@mui/material/styles/cssUtils'

const ProductCellCard = ({ product }) => {
  const [material] = useState(product.Mmp[0].material)
  const [color, setColor] = useState(
    product.Mmp[0].material.MaterialColor[0].color
  )
  // console.log(material)
  // console.log(material.MaterialColor)
  useEffect(() => {
    setColor(material?.MaterialColor[0]?.color)
  }, [material])

  function MakeMenuItem({ materialcolors }) {
    return materialcolors.map(({ color }) => {
      return (
        <MenuItem value={color.name} key={color.hex}>
          {color.name}
        </MenuItem>
      )
    })
  }

  return (
    <div>
      <Grid item key={product.id} sx={{ alignContent: 'center' }}>
        <Card sx={{ minWidth: 250, maxWidth: 300 }}>
          <h1>{product.title}</h1>
          <ul>
            <li>Projected Price: {product.price}</li>
            <li>Projected Print Time: {product.time}</li>
          </ul>
          {material ? (
            <FormControl>
              <Select
                placeholder="Select Color"
                id="color"
                value="Nothing"
                fullWidth
                label="Select Color"
              >
                <MenuItem>Nothing</MenuItem>
                <MakeMenuItem materialcolors={material?.MaterialColor} />
              </Select>
            </FormControl>
          ) : null}
        </Card>
      </Grid>
    </div>
  )
}

export default ProductCellCard
