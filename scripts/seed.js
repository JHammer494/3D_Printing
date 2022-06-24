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
      { name: 'Salmon', hex: 'FA8072' },
      { name: 'DarkSalmon', hex: 'E9967A' },
      { name: 'LightSalmon', hex: 'FFA07A' },
      { name: 'Crimson', hex: 'DC143C' },
      { name: 'Red', hex: 'FF0000' },
      { name: 'FireBrick', hex: 'B22222' },
      { name: 'DarkRed', hex: '8B0000' },
      { name: 'Pink', hex: 'FFC0CB' },
      { name: 'LightPink', hex: 'FFB6C1' },
      { name: 'HotPink', hex: 'FF69B4' },
      { name: 'DeepPink', hex: 'FF1493' },
      { name: 'MediumVioletRed', hex: 'C71585' },
      { name: 'PaleVioletRed', hex: 'DB7093' },
    ]
    const image = [
      {
        url: 'https://cdn.thomasnet.com/insights-images/embedded-images/235f0f09-547e-4883-98f7-22f216f9ad58/eed988b6-6b67-4fdf-9e0f-71db2cef0bb5/FullHD/best-3d-printer-miniatures-2020.jpg',
      },
      {
        url: 'https://images.ctfassets.net/dovsnf6qrcem/5xYXTaagt1Mt4yjRWcEans/cf7de41fc2480359318e2e729cb2e759/LAL_8195.jpeg?w=1200&h=871&fl=progressive&q=50&fm=jpg',
      },
    ]
    const size = [
      { volume: 50 },
      { volume: 100, weight: 4 },
      { volume: 800 },
      { weight: 120 },
    ]
    const material = [
      { color_id: 1, type: 'PLA' },
      { color_id: 2, type: 'PETg' },
      { color_id: 3, type: 'ECO Resin' },
      { color_id: 4, type: 'Flexible Resin' },
    ]
    const machine = [
      { name: 'BB', model: 'Ender 3' },
      { name: 'Becky', model: 'Phorzen Mighty 4k' },
      { name: 'Cait', model: 'Photon S' },
    ]
    const product = [
      { title: 'Stompa', price: 156, size_id: 1, material_id: 1, time: 60 },
      { title: 'Gun boi', price: 800, size_id: 2, material_id: 1, time: 60 },
      { title: 'Fish Mecha', price: 60, size_id: 3, material_id: 1, time: 60 },
      { title: 'Wurm', price: 50, size_id: 4, material_id: 1, time: 60 },
    ]
    const mmp = [
      { material_id: 1, product_id: 1, machine_id: 1 },
      { material_id: 2, product_id: 1, machine_id: 1 },
      { material_id: 1, product_id: 2, machine_id: 1 },
      { material_id: 2, product_id: 2, machine_id: 1 },
      { material_id: 1, product_id: 3, machine_id: 1 },
      { material_id: 1, product_id: 4, machine_id: 3 },
      { material_id: 2, product_id: 3, machine_id: 2 },
      { material_id: 2, product_id: 4, machine_id: 3 },
      { material_id: 3, product_id: 1, machine_id: 2 },
      { material_id: 4, product_id: 1, machine_id: 1 },
      { material_id: 3, product_id: 2, machine_id: 2 },
      { material_id: 4, product_id: 2, machine_id: 3 },
      { material_id: 3, product_id: 3, machine_id: 1 },
      { material_id: 4, product_id: 3, machine_id: 3 },
      { material_id: 3, product_id: 4, machine_id: 2 },
    ]

    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    await db.Machine.createMany({ data: machine })

    await db.Color.createMany({ data: colors })

    await db.Image.createMany({ data: image })

    await db.Size.createMany({ data: size })

    await db.Material.createMany({ data: material })

    await db.Product.createMany({ data: product })

    await db.Mmp.createMany({ data: mmp })
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
