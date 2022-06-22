import { db } from 'src/lib/db'

export const sizes = () => {
  return db.size.findMany()
}

export const size = ({ id }) => {
  return db.size.findUnique({
    where: { id },
  })
}

export const createSize = ({ input }) => {
  return db.size.create({
    data: input,
  })
}

export const updateSize = ({ id, input }) => {
  return db.size.update({
    data: input,
    where: { id },
  })
}

export const deleteSize = ({ id }) => {
  return db.size.delete({
    where: { id },
  })
}

export const Size = {
  Product: (_obj, { root }) =>
    db.size.findUnique({ where: { id: root.id } }).Product(),
}
