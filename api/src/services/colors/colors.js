import { db } from 'src/lib/db'

export const colors = () => {
  return db.color.findMany()
}

export const color = ({ id }) => {
  return db.color.findUnique({
    where: { id },
  })
}

export const createColor = ({ input }) => {
  return db.color.create({
    data: input,
  })
}

export const updateColor = ({ id, input }) => {
  return db.color.update({
    data: input,
    where: { id },
  })
}

export const deleteColor = ({ id }) => {
  return db.color.delete({
    where: { id },
  })
}

export const Color = {
  MaterialColor: (_obj, { root }) =>
    db.color.findUnique({ where: { id: root.id } }).MaterialColor(),
}
