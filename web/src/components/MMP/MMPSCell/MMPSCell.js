import { Link, routes } from '@redwoodjs/router'

import Mmps from 'src/components/Mmp/Mmps'

export const QUERY = gql`
  query FindMmps {
    mmps {
      id
      material_id
      product_id
      machine_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No mmps yet. '}
      <Link to={routes.newMmp()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ mmps }) => {
  return <Mmps mmps={mmps} />
}
