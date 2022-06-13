export const standard = defineScenario({
  size: {
    one: {
      data: {
        description: 'String',
        plate_id: { create: { printer: 'String' } },
      },
    },

    two: {
      data: {
        description: 'String',
        plate_id: { create: { printer: 'String' } },
      },
    },
  },
})
