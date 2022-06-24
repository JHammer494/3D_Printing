export const schema = gql`
  type Material {
    id: Int!
    type: String!
    Mmp: [Mmp]!
    Product: [Product]!
    MaterialColor: [MaterialColor]!
  }

  type Query {
    materials: [Material!]! @requireAuth
    material(id: Int!): Material @requireAuth
  }

  input CreateMaterialInput {
    type: String!
  }

  input UpdateMaterialInput {
    type: String
  }

  type Mutation {
    createMaterial(input: CreateMaterialInput!): Material! @requireAuth
    updateMaterial(id: Int!, input: UpdateMaterialInput!): Material!
      @requireAuth
    deleteMaterial(id: Int!): Material! @requireAuth
  }
`
