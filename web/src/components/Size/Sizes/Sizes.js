import humanize from 'humanize-string'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import { Link, routes } from '@redwoodjs/router'

import { QUERY } from 'src/components/Size/SizesCell'

const DELETE_SIZE_MUTATION = gql`
  mutation DeleteSizeMutation($id: Int!) {
    deleteSize(id: $id) {
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

const SizesList = ({ sizes }) => {
  const [deleteSize] = useMutation(DELETE_SIZE_MUTATION, {
    onCompleted: () => {
      toast.success('Size deleted')
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
    if (confirm('Are you sure you want to delete size ' + id + '?')) {
      deleteSize({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Volumn</th>
            <th>Weight</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {sizes.map((size) => (
            <tr key={size.id}>
              <td>{truncate(size.id)}</td>
              <td>{truncate(size.volumn)}</td>
              <td>{truncate(size.weight)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.size({ id: size.id })}
                    title={'Show size ' + size.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.editSize({ id: size.id })}
                    title={'Edit size ' + size.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete size ' + size.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(size.id)}
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

export default SizesList
