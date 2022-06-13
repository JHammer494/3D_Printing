import { db } from 'src/lib/db'

export const plates = () => {
  return db.plate.findMany()
}

export const plate = ({ id }) => {
  return db.plate.findUnique({
    where: { id },
  })
}

export const createPlate = ({ input }) => {
  return db.plate.create({
    data: input,
  })
}

export const updatePlate = ({ id, input }) => {
  return db.plate.update({
    data: input,
    where: { id },
  })
}

export const deletePlate = ({ id }) => {
  return db.plate.delete({
    where: { id },
  })
}

export const Plate = {
  size: (_obj, { root }) =>
    db.plate.findUnique({ where: { id: root.id } }).size(),
}
