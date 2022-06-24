export const schema = gql`
  type Material {
    id: Int!
    color: Color!
    color_id: Int!
    type: String!
    Mmp: [Mmp]!
    Product: [Product]!
  }

  type Query {
    materials: [Material!]! @requireAuth
    material(id: Int!): Material @requireAuth
  }

  input CreateMaterialInput {
    color_id: Int!
    type: String!
  }

  input UpdateMaterialInput {
    color_id: Int
    type: String
  }

  type Mutation {
    createMaterial(input: CreateMaterialInput!): Material! @requireAuth
    updateMaterial(id: Int!, input: UpdateMaterialInput!): Material!
      @requireAuth
    deleteMaterial(id: Int!): Material! @requireAuth
  }
`
