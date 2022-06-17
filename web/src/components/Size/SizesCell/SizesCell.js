import { Link, routes } from '@redwoodjs/router'

import Sizes from 'src/components/Size/Sizes'

export const QUERY = gql`
  query FindSizes {
    sizes {
      id
      volumn
      weight
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No sizes yet. '}
      <Link to={routes.newSize()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ sizes }) => {
  return <Sizes sizes={sizes} />
}
