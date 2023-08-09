import React, { InputHTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'

type CustomInputPropsType = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  errorText?: string
  hasError?: boolean
}

const CustomInput: React.FC<CustomInputPropsType> = ({
  className,
  label,
  id,
  hasError = false,
  errorText,
  ...rest
}) => {
  return (
    <div className={classNames(styles['form-group'], className)}>
      {label && (
        <label className={classNames(styles['form-group__label'])} htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={classNames(styles['form-group__input'])}
        id={id}
        {...rest}
      />
      {hasError && (
        <div className={classNames(styles['form-group__error'])}>
          {errorText}
        </div>
      )}
    </div>
  )
}

export default CustomInput
