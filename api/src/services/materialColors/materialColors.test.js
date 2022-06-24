import {
  materialColors,
  materialColor,
  createMaterialColor,
  updateMaterialColor,
  deleteMaterialColor,
} from './materialColors'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('materialColors', () => {
  scenario('returns all materialColors', async (scenario) => {
    const result = await materialColors()

    expect(result.length).toEqual(Object.keys(scenario.materialColor).length)
  })

  scenario('returns a single materialColor', async (scenario) => {
    const result = await materialColor({ id: scenario.materialColor.one.id })

    expect(result).toEqual(scenario.materialColor.one)
  })

  scenario('creates a materialColor', async (scenario) => {
    const result = await createMaterialColor({
      input: {
        material_id: scenario.materialColor.two.material_id,
        color_id: scenario.materialColor.two.color_id,
      },
    })

    expect(result.material_id).toEqual(scenario.materialColor.two.material_id)
    expect(result.color_id).toEqual(scenario.materialColor.two.color_id)
  })

  scenario('updates a materialColor', async (scenario) => {
    const original = await materialColor({ id: scenario.materialColor.one.id })
    const result = await updateMaterialColor({
      id: original.id,
      input: { material_id: scenario.materialColor.two.material_id },
    })

    expect(result.material_id).toEqual(scenario.materialColor.two.material_id)
  })

  scenario('deletes a materialColor', async (scenario) => {
    const original = await deleteMaterialColor({
      id: scenario.materialColor.one.id,
    })

    const result = await materialColor({ id: original.id })

    expect(result).toEqual(null)
  })
})
