export const standard = defineScenario({
  product: {
    one: {
      data: {
        title: 'String',
        price: 9333322.719022892,
        time: 8661578,
        size: { create: {} },
        material: {
          create: { type: 4131745, color: { create: { name: 'String' } } },
        },

        image: { create: { url: 'String' } },
      },
    },

    two: {
      data: {
        title: 'String',
        price: 7305631.000012318,
        time: 2678245,
        size: { create: {} },
        material: {
          create: { type: 8509458, color: { create: { name: 'String' } } },
        },

        image: { create: { url: 'String' } },
      },
    },
  },
})
