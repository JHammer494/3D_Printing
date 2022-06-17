import { Link, routes } from '@redwoodjs/router'

import Materials from 'src/components/Material/Materials'

export const QUERY = gql`
  query FindMaterials {
    materials {
      id
      color_id
      type
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No materials yet. '}
      <Link to={routes.newMaterial()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ materials }) => {
  return <Materials materials={materials} />
}
