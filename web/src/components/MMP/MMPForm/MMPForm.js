import {
  Form,
  FormError,
  FieldError,
  Label,
  NumberField,
  Submit,
} from '@redwoodjs/forms'

const MmpForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.mmp?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="material_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Material id
        </Label>

        <NumberField
          name="material_id"
          defaultValue={props.mmp?.material_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="material_id" className="rw-field-error" />

        <Label
          name="product_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Product id
        </Label>

        <NumberField
          name="product_id"
          defaultValue={props.mmp?.product_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="product_id" className="rw-field-error" />

        <Label
          name="machine_id"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Machine id
        </Label>

        <NumberField
          name="machine_id"
          defaultValue={props.mmp?.machine_id}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="machine_id" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default MmpForm
