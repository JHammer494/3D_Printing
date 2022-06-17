import { Link, routes } from '@redwoodjs/router'

import Colors from 'src/components/Color/Colors'

export const QUERY = gql`
  query FindColors {
    colors {
      id
      name
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No colors yet. '}
      <Link to={routes.newColor()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ colors }) => {
  return <Colors colors={colors} />
}
