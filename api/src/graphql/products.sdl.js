export const schema = gql`
  type Product {
    id: Int!
    title: String!
    price: Float!
    size: Size!
    size_id: Int!
    material: Material!
    material_id: Int!
    time: Int!
    MMP: [MMP]!
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    title: String!
    price: Float!
    size_id: Int!
    material_id: Int!
    time: Int!
  }

  input UpdateProductInput {
    title: String
    price: Float
    size_id: Int
    material_id: Int
    time: Int
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`
