import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import SizeForm from 'src/components/Size/SizeForm'

export const QUERY = gql`
  query EditSizeById($id: Int!) {
    size: size(id: $id) {
      id
      volumn
      weight
    }
  }
`
const UPDATE_SIZE_MUTATION = gql`
  mutation UpdateSizeMutation($id: Int!, $input: UpdateSizeInput!) {
    updateSize(id: $id, input: $input) {
      id
      volumn
      weight
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ size }) => {
  const [updateSize, { loading, error }] = useMutation(UPDATE_SIZE_MUTATION, {
    onCompleted: () => {
      toast.success('Size updated')
      navigate(routes.sizes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateSize({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Size {size.id}</h2>
      </header>
      <div className="rw-segment-main">
        <SizeForm size={size} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
