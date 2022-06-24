export const QUERY = gql`
  query FindProductQuery($id: Int!) {
    product: product(id: $id) {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ product }) => {
  return <div>{JSON.stringify(product)}</div>
}
