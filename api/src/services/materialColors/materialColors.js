import { db } from 'src/lib/db'

export const materialColors = () => {
  return db.materialColor.findMany()
}

export const materialColor = ({ id }) => {
  return db.materialColor.findUnique({
    where: { id },
  })
}

export const createMaterialColor = ({ input }) => {
  return db.materialColor.create({
    data: input,
  })
}

export const updateMaterialColor = ({ id, input }) => {
  return db.materialColor.update({
    data: input,
    where: { id },
  })
}

export const deleteMaterialColor = ({ id }) => {
  return db.materialColor.delete({
    where: { id },
  })
}

export const MaterialColor = {
  material: (_obj, { root }) =>
    db.materialColor.findUnique({ where: { id: root.id } }).material(),
  color: (_obj, { root }) =>
    db.materialColor.findUnique({ where: { id: root.id } }).color(),
}
