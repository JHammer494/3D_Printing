import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'
import MachineForm from 'src/components/Machine/MachineForm'

const CREATE_MACHINE_MUTATION = gql`
  mutation CreateMachineMutation($input: CreateMachineInput!) {
    createMachine(input: $input) {
      id
    }
  }
`

const NewMachine = () => {
  const [createMachine, { loading, error }] = useMutation(
    CREATE_MACHINE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Machine created')
        navigate(routes.machines())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input) => {
    createMachine({ variables: { input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Machine</h2>
      </header>
      <div className="rw-segment-main">
        <MachineForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewMachine
