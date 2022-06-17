import { db } from 'src/lib/db'

export const materials = () => {
  return db.material.findMany()
}

export const material = ({ id }) => {
  return db.material.findUnique({
    where: { id },
  })
}

export const createMaterial = ({ input }) => {
  return db.material.create({
    data: input,
  })
}

export const updateMaterial = ({ id, input }) => {
  return db.material.update({
    data: input,
    where: { id },
  })
}

export const deleteMaterial = ({ id }) => {
  return db.material.delete({
    where: { id },
  })
}

export const Material = {
  color: (_obj, { root }) =>
    db.material.findUnique({ where: { id: root.id } }).color(),
  MMP: (_obj, { root }) =>
    db.material.findUnique({ where: { id: root.id } }).MMP(),
  Product: (_obj, { root }) =>
    db.material.findUnique({ where: { id: root.id } }).Product(),
}
