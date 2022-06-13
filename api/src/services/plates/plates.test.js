import { plates, plate, createPlate, updatePlate, deletePlate } from './plates'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('plates', () => {
  scenario('returns all plates', async (scenario) => {
    const result = await plates()

    expect(result.length).toEqual(Object.keys(scenario.plate).length)
  })

  scenario('returns a single plate', async (scenario) => {
    const result = await plate({ id: scenario.plate.one.id })

    expect(result).toEqual(scenario.plate.one)
  })

  scenario('creates a plate', async () => {
    const result = await createPlate({
      input: { printer: 'String' },
    })

    expect(result.printer).toEqual('String')
  })

  scenario('updates a plate', async (scenario) => {
    const original = await plate({ id: scenario.plate.one.id })
    const result = await updatePlate({
      id: original.id,
      input: { printer: 'String2' },
    })

    expect(result.printer).toEqual('String2')
  })

  scenario('deletes a plate', async (scenario) => {
    const original = await deletePlate({ id: scenario.plate.one.id })
    const result = await plate({ id: original.id })

    expect(result).toEqual(null)
  })
})
