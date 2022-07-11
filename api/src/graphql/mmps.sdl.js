export const schema = gql`
  type Mmp {
    id: Int!
    material: Material!
    material_id: Int!
    product: Product!
    product_id: Int!
    machine: Machine!
    machine_id: Int!
    filteredMaterial: Material!
  }

  type Query {
    mmps: [Mmp!]! @requireAuth
    mmp(id: Int!): Mmp @requireAuth
  }

  input CreateMmpInput {
    material_id: Int!
    product_id: Int!
    machine_id: Int!
  }

  input UpdateMmpInput {
    material_id: Int
    product_id: Int
    machine_id: Int
  }

  type Mutation {
    createMmp(input: CreateMmpInput!): Mmp! @requireAuth
    updateMmp(id: Int!, input: UpdateMmpInput!): Mmp! @requireAuth
    deleteMmp(id: Int!): Mmp! @requireAuth
  }
`
