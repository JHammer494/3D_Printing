export const schema = gql`
  type Color {
    id: Int!
    name: String!
    hex: String!
    MaterialColor: [MaterialColor]!
  }

  type Query {
    colors: [Color!]! @requireAuth
    color(id: Int!): Color @requireAuth
  }

  input CreateColorInput {
    name: String!
    hex: String!
  }

  input UpdateColorInput {
    name: String
    hex: String
  }

  type Mutation {
    createColor(input: CreateColorInput!): Color! @requireAuth
    updateColor(id: Int!, input: UpdateColorInput!): Color! @requireAuth
    deleteColor(id: Int!): Color! @requireAuth
  }
`
