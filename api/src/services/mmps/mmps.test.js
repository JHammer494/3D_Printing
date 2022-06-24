import { mmps, mmp, createMmp, updateMmp, deleteMmp } from './mmps'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('mmps', () => {
  scenario('returns all mmps', async (scenario) => {
    const result = await mmps()

    expect(result.length).toEqual(Object.keys(scenario.mmp).length)
  })

  scenario('returns a single mmp', async (scenario) => {
    const result = await mmp({ id: scenario.mmp.one.id })

    expect(result).toEqual(scenario.mmp.one)
  })

  scenario('creates a mmp', async (scenario) => {
    const result = await createMmp({
      input: {
        material_id: scenario.mmp.two.material_id,
        product_id: scenario.mmp.two.product_id,
        machine_id: scenario.mmp.two.machine_id,
      },
    })

    expect(result.material_id).toEqual(scenario.mmp.two.material_id)
    expect(result.product_id).toEqual(scenario.mmp.two.product_id)
    expect(result.machine_id).toEqual(scenario.mmp.two.machine_id)
  })

  scenario('updates a mmp', async (scenario) => {
    const original = await mmp({ id: scenario.mmp.one.id })
    const result = await updateMmp({
      id: original.id,
      input: { material_id: scenario.mmp.two.material_id },
    })

    expect(result.material_id).toEqual(scenario.mmp.two.material_id)
  })

  scenario('deletes a mmp', async (scenario) => {
    const original = await deleteMmp({ id: scenario.mmp.one.id })
    const result = await mmp({ id: original.id })

    expect(result).toEqual(null)
  })
})
