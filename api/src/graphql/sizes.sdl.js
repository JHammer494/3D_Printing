export const schema = gql`
  type Size {
    id: Int!
    volume: Float
    weight: Float
    Product: [Product]!
  }

  type Query {
    sizes: [Size!]! @requireAuth
    size(id: Int!): Size @requireAuth
  }

  input CreateSizeInput {
    volume: Float
    weight: Float
  }

  input UpdateSizeInput {
    volume: Float
    weight: Float
  }

  type Mutation {
    createSize(input: CreateSizeInput!): Size! @requireAuth
    updateSize(id: Int!, input: UpdateSizeInput!): Size! @requireAuth
    deleteSize(id: Int!): Size! @requireAuth
  }
`
