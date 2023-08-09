import classNames from 'classnames'
import React, { InputHTMLAttributes, ReactNode } from 'react'

import styles from './style.module.scss'

type CustomInputPropsType = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  errorText?: string
  hasError?: boolean
  button?: ReactNode
}

const CustomInput: React.FC<CustomInputPropsType> = ({
  className,
  label,
  id,
  hasError = false,
  errorText,
  button,
  ...rest
}) => {
  return (
    <div className={classNames(styles['form-group'], className)}>
      {label && (
        <label className={classNames(styles['form-group__label'])} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={classNames(styles['form-group__wrapper'])}>
        <input
          className={classNames(
            styles['form-group__input'],
            button ? 'px-20' : ''
          )}
          id={id}
          {...rest}
        />
        {button && (
          <div className={classNames(styles['form-group__button'])}>
            {button}
          </div>
        )}
      </div>

      {hasError && (
        <div className={classNames(styles['form-group__error'])}>
          {errorText}
        </div>
      )}
    </div>
  )
}

export default CustomInput
