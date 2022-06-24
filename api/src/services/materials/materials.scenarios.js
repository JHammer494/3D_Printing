export const standard = defineScenario({
  material: {
    one: {
      data: {
        type: 'String',
        color: { create: { name: 'String', hex: 'String' } },
      },
    },

    two: {
      data: {
        type: 'String',
        color: { create: { name: 'String', hex: 'String' } },
      },
    },
  },
})
