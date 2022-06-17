import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/MMP/MMPSCell'

const DELETE_MMP_MUTATION = gql`
  mutation DeleteMmpMutation($id: Int!) {
    deleteMmp(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const MmpsList = ({ mmps }) => {
  const [deleteMmp] = useMutation(DELETE_MMP_MUTATION, {
    onCompleted: () => {
      toast.success('Mmp deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete mmp ' + id + '?')) {
      deleteMmp({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Material id</th>
            <th>Product id</th>
            <th>Machine id</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {mmps.map((mmp) => (
            <tr key={mmp.id}>
              <td>{truncate(mmp.id)}</td>
              <td>{truncate(mmp.material_id)}</td>
              <td>{truncate(mmp.product_id)}</td>
              <td>{truncate(mmp.machine_id)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.mmp({ id: mmp.id })}
                    title={'Show mmp ' + mmp.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editMMP({ id: mmp.id })}
                    title={'Edit mmp ' + mmp.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete mmp ' + mmp.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(mmp.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default MmpsList
