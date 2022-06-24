export const standard = defineScenario({
  materialColor: {
    one: {
      data: {
        material: { create: { type: 'String' } },
        color: { create: { name: 'String', hex: 'String' } },
      },
    },

    two: {
      data: {
        material: { create: { type: 'String' } },
        color: { create: { name: 'String', hex: 'String' } },
      },
    },
  },
})
