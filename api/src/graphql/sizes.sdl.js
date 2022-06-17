export const schema = gql`
  type Size {
    id: Int!
    volumn: Float
    weight: Float
    Product: [Product]!
  }

  type Query {
    sizes: [Size!]! @requireAuth
    size(id: Int!): Size @requireAuth
  }

  input CreateSizeInput {
    volumn: Float
    weight: Float
  }

  input UpdateSizeInput {
    volumn: Float
    weight: Float
  }

  type Mutation {
    createSize(input: CreateSizeInput!): Size! @requireAuth
    updateSize(id: Int!, input: UpdateSizeInput!): Size! @requireAuth
    deleteSize(id: Int!): Size! @requireAuth
  }
`
