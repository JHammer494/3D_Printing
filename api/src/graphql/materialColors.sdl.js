export const schema = gql`
  type MaterialColor {
    id: Int!
    material: Material!
    material_id: Int!
    color: Color!
    color_id: Int!
  }

  type Query {
    materialColors: [MaterialColor!]! @requireAuth
    materialColor(id: Int!): MaterialColor @requireAuth
  }

  input CreateMaterialColorInput {
    material_id: Int!
    color_id: Int!
  }

  input UpdateMaterialColorInput {
    material_id: Int
    color_id: Int
  }

  type Mutation {
    createMaterialColor(input: CreateMaterialColorInput!): MaterialColor!
      @requireAuth
    updateMaterialColor(
      id: Int!
      input: UpdateMaterialColorInput!
    ): MaterialColor! @requireAuth
    deleteMaterialColor(id: Int!): MaterialColor! @requireAuth
  }
`
