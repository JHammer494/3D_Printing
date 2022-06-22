export const standard = defineScenario({
  mmp: {
    one: {
      data: {
        material: {
          create: { type: 5531784, color: { create: { name: 'String' } } },
        },

        product: {
          create: {
            title: 'String',
            price: 288302.4106240573,
            time: 1818307,
            size: { create: {} },
            material: {
              create: { type: 5332972, color: { create: { name: 'String' } } },
            },
          },
        },

        machine: { create: { name: 'String', model: 'String' } },
      },
    },

    two: {
      data: {
        material: {
          create: { type: 6079634, color: { create: { name: 'String' } } },
        },

        product: {
          create: {
            title: 'String',
            price: 1405919.4775094541,
            time: 4247114,
            size: { create: {} },
            material: {
              create: { type: 8500992, color: { create: { name: 'String' } } },
            },
          },
        },

        machine: { create: { name: 'String', model: 'String' } },
      },
    },
  },
})
