import Size from 'src/components/Size/Size'

export const QUERY = gql`
  query FindSizeById($id: Int!) {
    size: size(id: $id) {
      id
      volumn
      weight
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Size not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ size }) => {
  return <Size size={size} />
}
