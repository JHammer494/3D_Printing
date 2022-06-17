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

  scenario('creates a material', async (scenario) => {
    const result = await createMaterial({
      input: { color_id: scenario.material.two.color_id, type: 4392809 },
    })

    expect(result.color_id).toEqual(scenario.material.two.color_id)
    expect(result.type).toEqual(4392809)
  })

  scenario('updates a material', async (scenario) => {
    const original = await material({ id: scenario.material.one.id })
    const result = await updateMaterial({
      id: original.id,
      input: { type: 2592508 },
    })

    expect(result.type).toEqual(2592508)
  })

  scenario('deletes a material', async (scenario) => {
    const original = await deleteMaterial({ id: scenario.material.one.id })
    const result = await material({ id: original.id })

    expect(result).toEqual(null)
  })
})
