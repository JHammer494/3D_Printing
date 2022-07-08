import { faker } from '@faker-js/faker'

import Colors from './Colors'
import Materials from './Materials'

const MaterialColors = []
console.log('MaterialColors')
for (let x in Materials) {
  for (
    let y = faker.datatype.number({ min: 1, max: Colors.length - 10 });
    y < faker.datatype.number({ min: y, max: Colors.length });
    y++
  ) {
    console.log(Materials[x])
    MaterialColors.push({ material_id: Number.parseInt(x) + 1, color_id: y })
  }
}
export default MaterialColors
