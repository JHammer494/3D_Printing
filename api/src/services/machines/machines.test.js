import {
  machines,
  machine,
  createMachine,
  updateMachine,
  deleteMachine,
} from './machines'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('machines', () => {
  scenario('returns all machines', async (scenario) => {
    const result = await machines()

    expect(result.length).toEqual(Object.keys(scenario.machine).length)
  })

  scenario('returns a single machine', async (scenario) => {
    const result = await machine({ id: scenario.machine.one.id })

    expect(result).toEqual(scenario.machine.one)
  })

  scenario('creates a machine', async () => {
    const result = await createMachine({
      input: { name: 'String', model: 'String' },
    })

    expect(result.name).toEqual('String')
    expect(result.model).toEqual('String')
  })

  scenario('updates a machine', async (scenario) => {
    const original = await machine({ id: scenario.machine.one.id })
    const result = await updateMachine({
      id: original.id,
      input: { name: 'String2' },
    })

    expect(result.name).toEqual('String2')
  })

  scenario('deletes a machine', async (scenario) => {
    const original = await deleteMachine({ id: scenario.machine.one.id })
    const result = await machine({ id: original.id })

    expect(result).toEqual(null)
  })
})
