import {
  products,
  product,
  createProduct,
  updateProduct,
  deleteProduct,
} from './products'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('products', () => {
  scenario('returns all products', async (scenario) => {
    const result = await products()

    expect(result.length).toEqual(Object.keys(scenario.product).length)
  })

  scenario('returns a single product', async (scenario) => {
    const result = await product({ id: scenario.product.one.id })

    expect(result).toEqual(scenario.product.one)
  })

  scenario('creates a product', async (scenario) => {
    const result = await createProduct({
      input: {
        title: 'String3256830',
        price: 9757021,
        sizeID: scenario.product.two.sizeID,
        print: '2022-06-13T13:24:48Z',
        file_id: 8555149,
        image: scenario.product.two.image,
        description: 'String',
        meta_terms: 'String',
      },
    })

    expect(result.title).toEqual('String3256830')
    expect(result.price).toEqual(9757021)
    expect(result.sizeID).toEqual(scenario.product.two.sizeID)
    expect(result.print).toEqual('2022-06-13T13:24:48Z')
    expect(result.file_id).toEqual(8555149)
    expect(result.image).toEqual(scenario.product.two.image)
    expect(result.description).toEqual('String')
    expect(result.meta_terms).toEqual('String')
  })

  scenario('updates a product', async (scenario) => {
    const original = await product({ id: scenario.product.one.id })
    const result = await updateProduct({
      id: original.id,
      input: { title: 'String67743562' },
    })

    expect(result.title).toEqual('String67743562')
  })

  scenario('deletes a product', async (scenario) => {
    const original = await deleteProduct({ id: scenario.product.one.id })
    const result = await product({ id: original.id })

    expect(result).toEqual(null)
  })
})
