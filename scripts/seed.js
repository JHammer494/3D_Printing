import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    // url https://htmlcolorcodes.com/color-names/
    const colors = [
      { name: 'IndianRed', hex: 'CD5C5C' },
      { name: 'LightCoral', hex: 'F08080' },
      {
        name: 'Salmon',
        hex: 'FA8072',
      },
      {
        name: 'DarkSalmon',
        hex: 'E9967A',
      },
      {
        name: 'LightSalmon',
        hex: 'FFA07A',
      },
      {
        name: 'Crimson',
        hex: 'DC143C',
      },
      {
        name: 'Red',
        hex: 'FF0000',
      },
      {
        name: 'FireBrick',
        hex: 'B22222',
      },
      {
        name: 'DarkRed',
        hex: '8B0000',
      },
      {
        name: 'Pink',
        hex: 'FFC0CB',
      },
      {
        name: 'LightPink',
        hex: 'FFB6C1',
      },
      {
        name: 'HotPink',
        hex: 'FF69B4',
      },
      {
        name: 'DeepPink',
        hex: 'FF1493',
      },
      {
        name: 'MediumVioletRed',
        hex: 'C71585',
      },
      {
        name: 'PaleVioletRed',
        hex: 'DB7093',
      },
    ]
    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      colors.map(async (data) => {
        const record = await db.color.create({ data })
        console.log(record)
      })
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
