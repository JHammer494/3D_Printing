import Machine from 'src/components/Machine/Machine'

export const QUERY = gql`
  query FindMachineById($id: Int!) {
    machine: machine(id: $id) {
      id
      name
      model
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Machine not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ machine }) => {
  return <Machine machine={machine} />
}
