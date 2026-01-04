import React from 'react'
import { Control, FieldValues, Path, useController } from 'react-hook-form'

interface MyInputProps<T extends FieldValues> {
  control: Control<T>
  name: Path<T>
  placeholder?: string
  type?: string
  label?: string
  className?: string
}

const ControlledInput = <T extends FieldValues>({
  control,
  name,
  type = 'text',
  placeholder,
  label,
  className,
}: MyInputProps<T>) => {
  const {
    field,
    fieldState: { error },
    formState: { errors, isSubmitted },
  } = useController({ control, name })
  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <input
        className="input"
        {...field}
        id={name}
        type={type}
        placeholder={placeholder}
      />
      {error && <span style={{ color: 'red' }}>{error.message}</span>}
    </div>
  )
}

export default ControlledInput
