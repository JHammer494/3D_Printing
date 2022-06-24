import { db } from 'src/lib/db'

export const products = () => {
  return db.product.findMany()
}

export const product = ({ id }) => {
  return db.product.findUnique({
    where: { id },
  })
}

export const createProduct = ({ input }) => {
  return db.product.create({
    data: input,
  })
}

export const updateProduct = ({ id, input }) => {
  return db.product.update({
    data: input,
    where: { id },
  })
}

export const deleteProduct = ({ id }) => {
  return db.product.delete({
    where: { id },
  })
}

export const Product = {
  size: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).size(),
  Mmp: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).Mmp(),
  image: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).image(),
  Material: (_obj, { root }) =>
    db.product.findUnique({ where: { id: root.id } }).Material(),
}
