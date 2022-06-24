import {
  materials,
  material,
  createMaterial,
  updateMaterial,
  deleteMaterial,
} from './materials'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('materials', () => {
  scenario('returns all materials', async (scenario) => {
    const result = await materials()

    expect(result.length).toEqual(Object.keys(scenario.material).length)
  })

  scenario('returns a single material', async (scenario) => {
    const result = await material({ id: scenario.material.one.id })

    expect(result).toEqual(scenario.material.one)
  })

  scenario('creates a material', async () => {
    const result = await createMaterial({
      input: { type: 'String' },
    })

    expect(result.type).toEqual('String')
  })

  scenario('updates a material', async (scenario) => {
    const original = await material({ id: scenario.material.one.id })
    const result = await updateMaterial({
      id: original.id,
      input: { type: 'String2' },
    })

    expect(result.type).toEqual('String2')
  })

  scenario('deletes a material', async (scenario) => {
    const original = await deleteMaterial({ id: scenario.material.one.id })
    const result = await material({ id: original.id })

    expect(result).toEqual(null)
  })
})
