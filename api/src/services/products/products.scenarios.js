export const standard = defineScenario({
  product: {
    one: {
      data: {
        title: 'String',
        price: 9940551.908844342,
        time: 9766377,
        size: { create: {} },
        material: {
          create: {
            type: 'String',
            color: { create: { name: 'String', hex: 'String' } },
          },
        },
      },
    },

    two: {
      data: {
        title: 'String',
        price: 8905957.719920328,
        time: 7316721,
        size: { create: {} },
        material: {
          create: {
            type: 'String',
            color: { create: { name: 'String', hex: 'String' } },
          },
        },
      },
    },
  },
})
