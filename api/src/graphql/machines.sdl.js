export const schema = gql`
  type Machine {
    id: Int!
    name: String!
    model: String!
    MMP: [MMP]!
  }

  type Query {
    machines: [Machine!]! @requireAuth
    machine(id: Int!): Machine @requireAuth
  }

  input CreateMachineInput {
    name: String!
    model: String!
  }

  input UpdateMachineInput {
    name: String
    model: String
  }

  type Mutation {
    createMachine(input: CreateMachineInput!): Machine! @requireAuth
    updateMachine(id: Int!, input: UpdateMachineInput!): Machine! @requireAuth
    deleteMachine(id: Int!): Machine! @requireAuth
  }
`
