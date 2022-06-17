import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { navigate, routes } from '@redwoodjs/router'

import MachineForm from 'src/components/Machine/MachineForm'

export const QUERY = gql`
  query EditMachineById($id: Int!) {
    machine: machine(id: $id) {
      id
      name
      model
    }
  }
`
const UPDATE_MACHINE_MUTATION = gql`
  mutation UpdateMachineMutation($id: Int!, $input: UpdateMachineInput!) {
    updateMachine(id: $id, input: $input) {
      id
      name
      model
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ machine }) => {
  const [updateMachine, { loading, error }] = useMutation(
    UPDATE_MACHINE_MUTATION,
    {
      onCompleted: () => {
        toast.success('Machine updated')
        navigate(routes.machines())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateMachine({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Machine {machine.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <MachineForm
          machine={machine}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
