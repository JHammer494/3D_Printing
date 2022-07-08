import Machines from './Machines'
import Materials from './Materials'
import Products from './Products'

const Mmps = []

for (let x in Products) {
  for (let z in Materials) {
    for (let y in Machines) {
      Mmps.push({
        product_id: Number.parseInt(x) + 1,
        machine_id: Number.parseInt(y) + 1,
        material_id: Number.parseInt(z) + 1,
      })
    }
  }
}
export default Mmps

// { material_id: 1, product_id: 1, machine_id: 1 },
