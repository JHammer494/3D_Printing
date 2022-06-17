import { db } from 'src/lib/db'

export const machines = () => {
  return db.machine.findMany()
}

export const machine = ({ id }) => {
  return db.machine.findUnique({
    where: { id },
  })
}

export const createMachine = ({ input }) => {
  return db.machine.create({
    data: input,
  })
}

export const updateMachine = ({ id, input }) => {
  return db.machine.update({
    data: input,
    where: { id },
  })
}

export const deleteMachine = ({ id }) => {
  return db.machine.delete({
    where: { id },
  })
}

export const Machine = {
  MMP: (_obj, { root }) =>
    db.machine.findUnique({ where: { id: root.id } }).MMP(),
}
