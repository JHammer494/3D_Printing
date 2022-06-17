import { Link, routes } from '@redwoodjs/router'

import Machines from 'src/components/Machine/Machines'

export const QUERY = gql`
  query FindMachines {
    machines {
      id
      name
      model
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No machines yet. '}
      <Link to={routes.newMachine()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ machines }) => {
  return <Machines machines={machines} />
}
