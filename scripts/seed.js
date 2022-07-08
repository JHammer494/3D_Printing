import { db } from 'api/src/lib/db'

import Colors from './Seeds/Colors'
import Machines from './Seeds/Machines'
import MaterialColors from './Seeds/MaterialColors'
import Materials from './Seeds/Materials'
import Mmps from './Seeds/Mmps'
import Products from './Seeds/Products'
import Sizes from './Seeds/Sizes'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    // url https://htmlcolorcodes.com/color-names/
    const image = [
      {
        url: 'https://cdn.thomasnet.com/insights-images/embedded-images/235f0f09-547e-4883-98f7-22f216f9ad58/eed988b6-6b67-4fdf-9e0f-71db2cef0bb5/FullHD/best-3d-printer-miniatures-2020.jpg',
      },
      {
        url: 'https://images.ctfassets.net/dovsnf6qrcem/5xYXTaagt1Mt4yjRWcEans/cf7de41fc2480359318e2e729cb2e759/LAL_8195.jpeg?w=1200&h=871&fl=progressive&q=50&fm=jpg',
      },
    ]

    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )
    console.log('seeding machines')
    await db.Machine.createMany({ data: Machines })
    console.log('seeding colors')
    await db.Color.createMany({ data: Colors, skipDuplicates: true })
    console.log('seeding Images')
    await db.Image.createMany({ data: image, skipDuplicates: true })
    console.log('seeding Sizes')
    await db.Size.createMany({ data: Sizes, skipDuplicates: true })
    console.log('seeding Materials')
    await db.Material.createMany({ data: Materials, skipDuplicates: true })
    console.log('seeding MaterialColors')
    await db.MaterialColor.createMany({
      data: MaterialColors,
      skipDuplicates: true,
    })
    console.log('seeding Products')
    await db.Product.createMany({ data: Products, skipDuplicates: true })
    console.log('seedong MMP Join')
    await db.Mmp.createMany({ data: Mmps, skipDuplicates: true })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
