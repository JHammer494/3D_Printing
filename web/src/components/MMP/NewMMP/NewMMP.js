import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MmpForm from 'src/components/Mmp/MmpForm'

const CREATE_MMP_MUTATION = gql`
  mutation CreateMmpMutation($input: CreateMmpInput!) {
    createMmp(input: $input) {
      id
    }
  }
`

const NewMmp = () => {
  const [createMmp, { loading, error }] = useMutation(CREATE_MMP_MUTATION, {
    onCompleted: () => {
      toast.success('Mmp created')
      navigate(routes.mmps())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createMmp({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Mmp</h2>
      </header>
      <div className="rw-segment-main">
        <MmpForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMmp
