import { db } from 'src/lib/db'

export const mmps = () => {
  return db.mmp.findMany()
}

export const mmp = ({ id }) => {
  return db.mmp.findUnique({
    where: { id },
  })
}

export const createMmp = ({ input }) => {
  return db.mmp.create({
    data: input,
  })
}

export const updateMmp = ({ id, input }) => {
  return db.mmp.update({
    data: input,
    where: { id },
  })
}

export const deleteMmp = ({ id }) => {
  return db.mmp.delete({
    where: { id },
  })
}

export const Mmp = {
  material: (_obj, { root }) =>
    db.mmp.findUnique({ where: { id: root.id } }).material(),
  product: (_obj, { root }) =>
    db.mmp.findUnique({ where: { id: root.id } }).product(),
  machine: (_obj, { root }) =>
    db.mmp.findUnique({ where: { id: root.id } }).machine(),
}
