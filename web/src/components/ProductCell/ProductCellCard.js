import { useEffect, useState } from 'react'

import { Grid, Card, MenuItem, TextField, FormControl } from '@mui/material'
import { Box } from '@mui/system'

const ProductCellCard = ({ product }) => {
  const [material, setMaterial] = useState(product.Mmp[0].material)
  const [value, setValue] = useState('')
  const [color, setColor] = useState(
    product.Mmp[0].material.MaterialColor[0].color
  )

  // console.log(material)
  // console.log(material.MaterialColor)
  useEffect(() => {
    setColor(material?.MaterialColor[0]?.color)
  }, [material])

  const MaterialChange = (event) => {
    setValue(event.target.value)
    setMaterial(event.target.value)
  }
  function MakeMenuItem({ materialcolors, materialOptions }) {
    if (materialcolors) {
      return materialcolors.map(({ color }) => {
        return (
          <MenuItem value={color.name} key={color.hex}>
            {color.name}
          </MenuItem>
        )
      })
    } else if (materialOptions) {
      return materialOptions.map(({ material }) => {
        return (
          <MenuItem value={material.type} key={material.id}>
            {material.type}
          </MenuItem>
        )
      })
    }
  }
  function RenderList() {
    return (
      <Box sx={{ maxWidth: 140, justifyContent: 'flex-end' }}>
        <FormControl fullWidth>
          <TextField
            select
            placeholder="Select Material"
            id="Material"
            defaultValue=""
            value={value}
            fullWidth
            label="Available Materials"
            onChange={MaterialChange}
          >
            <MenuItem>Nothing</MenuItem>
            <MakeMenuItem materialOptions={product.Mmp} />
          </TextField>
          <TextField
            select
            placeholder="Select Color"
            id="color"
            defaultValue=""
            value=""
            fullWidth
            label="Select Color"
          >
            <MenuItem>Nothing</MenuItem>
            <MakeMenuItem materialcolors={material?.MaterialColor} />
          </TextField>
        </FormControl>
      </Box>
    )
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
          {material ? RenderList() : null}
        </Card>
      </Grid>
    </div>
  )
}

export default ProductCellCard
