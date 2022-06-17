import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import SizeForm from 'src/components/Size/SizeForm'

const CREATE_SIZE_MUTATION = gql`
  mutation CreateSizeMutation($input: CreateSizeInput!) {
    createSize(input: $input) {
      id
    }
  }
`

const NewSize = () => {
  const [createSize, { loading, error }] = useMutation(CREATE_SIZE_MUTATION, {
    onCompleted: () => {
      toast.success('Size created')
      navigate(routes.sizes())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onSave = (input) => {
    createSize({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Size</h2>
      </header>
      <div className="rw-segment-main">
        <SizeForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewSize
