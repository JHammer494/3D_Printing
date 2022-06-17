export const schema = gql`
  type Material {
    id: Int!
    color: Color!
    color_id: Int!
    type: Int!
    MMP: [MMP]!
    Product: [Product]!
  }

  type Query {
    materials: [Material!]! @requireAuth
    material(id: Int!): Material @requireAuth
  }

  input CreateMaterialInput {
    color_id: Int!
    type: Int!
  }

  input UpdateMaterialInput {
    color_id: Int
    type: Int
  }

  type Mutation {
    createMaterial(input: CreateMaterialInput!): Material! @requireAuth
    updateMaterial(id: Int!, input: UpdateMaterialInput!): Material!
      @requireAuth
    deleteMaterial(id: Int!): Material! @requireAuth
  }
`
