import { useEffect, useState } from 'react'

import { Grid, Card, MenuItem, TextField, FormControl } from '@mui/material'
import { Box } from '@mui/system'

const ProductCellCard = ({ product }) => {
  const [material, setMaterial] = useState(product.Mmp[0].material)
  const [value, setValue] = useState([])

  useEffect(() => {
    let unique = []
    product.Mmp.forEach((mat) => {
      console.log(mat.material)
      let there = false
      for (let x of unique) {
        if (x.id === mat.material.id) {
          there = true
        }
      }
      if (!there) {
        unique.push(mat.material)
      }
    })
    console.log(unique)
    setValue(unique)
  }, [])

  // console.log(material)
  // console.log(material.MaterialColor)

  const MaterialChange = (event) => {
    setValue(event.target.value)
    setMaterial(event.target.value)
  }
  function MakeMenuItem({ materialOptions }) {
    const options = []
    for (let x of materialOptions) {
      options.push(
        <MenuItem value={x.type} key={x.id}>
          {x.type}
        </MenuItem>
      )
    }
    return options
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
            fullWidth
            label="Available Materials"
            onChange={MaterialChange}
          >
            <MenuItem>Nothing</MenuItem>
            {value ? <MakeMenuItem materialOptions={value} /> : <>Loading...</>}
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
