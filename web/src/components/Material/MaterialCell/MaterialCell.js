import Material from 'src/components/Material/Material'

export const QUERY = gql`
  query FindMaterialById($id: Int!) {
    material: material(id: $id) {
      id
      color_id
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Material not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ material }) => {
  return <Material material={material} />
}
