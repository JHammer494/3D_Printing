export const schema = gql`
  type Product {
    id: Int!
    title: String!
    price: Float!
    size: Size!
    size_id: Int!
    time: Int!
    Mmp: [Mmp]!
    image: Image
    image_id: Int
    Material: Material
    materialId: Int
  }

  type Query {
    products: [Product!]! @requireAuth
    product(id: Int!): Product @requireAuth
  }

  input CreateProductInput {
    title: String!
    price: Float!
    size_id: Int!
    time: Int!
    image_id: Int
    materialId: Int
  }

  input UpdateProductInput {
    title: String
    price: Float
    size_id: Int
    time: Int
    image_id: Int
    materialId: Int
  }

  type Mutation {
    createProduct(input: CreateProductInput!): Product! @requireAuth
    updateProduct(id: Int!, input: UpdateProductInput!): Product! @requireAuth
    deleteProduct(id: Int!): Product! @requireAuth
  }
`
