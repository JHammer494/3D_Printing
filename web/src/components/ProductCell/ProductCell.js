export const QUERY = gql`
  query FindProductQuery {
    products: products {
      id
      image_id
      material {
        type
        color {
          id
          name
        }
      }
      price
      size_id
      time
      title
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ products }) => {
  const productListings = products.map((data) => {
    return (
      <div key={data.id}>
        <h1>{data.title}</h1>
        <ul>
          <li>{data.price}</li>
        </ul>
      </div>
    )
  })
  return <>{productListings}</>
}
