export const standard = defineScenario({
  mmp: {
    one: {
      data: {
        material: {
          create: {
            type: 'String',
            color: { create: { name: 'String', hex: 'String' } },
          },
        },

        product: {
          create: {
            title: 'String',
            price: 4984054.680284082,
            time: 9787586,
            size: { create: {} },
            material: {
              create: {
                type: 'String',
                color: { create: { name: 'String', hex: 'String' } },
              },
            },
          },
        },

        machine: { create: { name: 'String', model: 'String' } },
      },
    },

    two: {
      data: {
        material: {
          create: {
            type: 'String',
            color: { create: { name: 'String', hex: 'String' } },
          },
        },

        product: {
          create: {
            title: 'String',
            price: 7299741.220307214,
            time: 972744,
            size: { create: {} },
            material: {
              create: {
                type: 'String',
                color: { create: { name: 'String', hex: 'String' } },
              },
            },
          },
        },

        machine: { create: { name: 'String', model: 'String' } },
      },
    },
  },
})
