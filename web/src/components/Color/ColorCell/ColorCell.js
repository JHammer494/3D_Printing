import Color from 'src/components/Color/Color'

export const QUERY = gql`
  query FindColorById($id: Int!) {
    color: color(id: $id) {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Color not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ color }) => {
  return <Color color={color} />
}
