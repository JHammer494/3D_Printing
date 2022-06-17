export const standard = defineScenario({
  mmp: {
    one: {
      data: {
        material: {
          create: { type: 1753351, color: { create: { name: 'String' } } },
        },

        product: {
          create: {
            title: 'String',
            price: 9143991.861799477,
            time: 1928064,
            size: { create: {} },
            material: {
              create: { type: 3321202, color: { create: { name: 'String' } } },
            },
          },
        },

        machine: { create: { name: 'String', model: 'String' } },
      },
    },

    two: {
      data: {
        material: {
          create: { type: 6688346, color: { create: { name: 'String' } } },
        },

        product: {
          create: {
            title: 'String',
            price: 3209715.227857952,
            time: 3152162,
            size: { create: {} },
            material: {
              create: { type: 849869, color: { create: { name: 'String' } } },
            },
          },
        },

        machine: { create: { name: 'String', model: 'String' } },
      },
    },
  },
})
