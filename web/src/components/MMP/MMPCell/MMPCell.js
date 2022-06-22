import Mmp from 'src/components/Mmp/Mmp'

export const QUERY = gql`
  query FindMmpById($id: Int!) {
    mmp: mmp(id: $id) {
      id
      material_id
      product_id
      machine_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Mmp not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ mmp }) => {
  return <Mmp mmp={mmp} />
}
