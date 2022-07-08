import { faker } from '@faker-js/faker'
const Sizes = []

for (let x = 0; x < 50; x++) {
  let num = faker.datatype.number({ min: 0, max: 2 })
  // console.log(faker.datatype.number({ min: 0, max: 2 }))

  let size
  switch (num) {
    case 0:
      size = {
        volume: faker.unique(faker.datatype.number, [{ max: 500 }]),
      }
      break
    case 1:
      size = {
        weight: faker.unique(faker.datatype.number, [{ max: 1000 }]),
      }
      break
    case 2:
      size = {
        volume: faker.unique(faker.datatype.number, [{ max: 500 }]),
        weight: faker.unique(faker.datatype.number, [{ max: 1000 }]),
      }
      break
  }
  Sizes.push(size)
}
export default Sizes
