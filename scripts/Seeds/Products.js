import { faker } from '@faker-js/faker'

import Sizes from './Sizes'
const Products = []
console.log('products')
for (let x = 0; x < 50; x++) {
  Products.push({
    title: faker.word.verb() + ' ' + faker.animal.type(),
    price: Number.parseFloat(faker.finance.amount(1, 100)),
    size_id: faker.datatype.number({ min: 1, max: Sizes.length }),
    time: faker.datatype.number({ min: 5, max: 360 }),
  })
}

export default Products
