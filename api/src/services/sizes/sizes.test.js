import { sizes, size, createSize, updateSize, deleteSize } from './sizes'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('sizes', () => {
  scenario('returns all sizes', async (scenario) => {
    const result = await sizes()

    expect(result.length).toEqual(Object.keys(scenario.size).length)
  })

  scenario('returns a single size', async (scenario) => {
    const result = await size({ id: scenario.size.one.id })

    expect(result).toEqual(scenario.size.one)
  })

  scenario('creates a size', async (scenario) => {
    const result = await createSize({
      input: {
        description: 'String',
        plate_size: scenario.size.two.plate_size,
      },
    })

    expect(result.description).toEqual('String')
    expect(result.plate_size).toEqual(scenario.size.two.plate_size)
  })

  scenario('updates a size', async (scenario) => {
    const original = await size({ id: scenario.size.one.id })
    const result = await updateSize({
      id: original.id,
      input: { description: 'String2' },
    })

    expect(result.description).toEqual('String2')
  })

  scenario('deletes a size', async (scenario) => {
    const original = await deleteSize({ id: scenario.size.one.id })
    const result = await size({ id: original.id })

    expect(result).toEqual(null)
  })
})
