import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MmpForm from 'src/components/Mmp/MmpForm'

export const QUERY = gql`
  query EditMmpById($id: Int!) {
    mmp: mmp(id: $id) {
      id
      material_id
      product_id
      machine_id
    }
  }
`
const UPDATE_MMP_MUTATION = gql`
  mutation UpdateMmpMutation($id: Int!, $input: UpdateMmpInput!) {
    updateMmp(id: $id, input: $input) {
      id
      material_id
      product_id
      machine_id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ mmp }) => {
  const [updateMmp, { loading, error }] = useMutation(UPDATE_MMP_MUTATION, {
    onCompleted: () => {
      toast.success('Mmp updated')
      navigate(routes.mmps())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input, id) => {
    updateMmp({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">Edit Mmp {mmp.id}</h2>
      </header>
      <div className="rw-segment-main">
        <MmpForm mmp={mmp} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
