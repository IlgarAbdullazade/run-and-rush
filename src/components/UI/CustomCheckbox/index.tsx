import React, { InputHTMLAttributes } from 'react'

import classNames from 'classnames'

import { HiCheckCircle } from 'react-icons/hi'

import styles from './style.module.scss'

type CustomCheckboxPropsType = InputHTMLAttributes<HTMLInputElement> & {
  errorText?: string
  hasError?: boolean
}

const CustomCheckbox: React.FC<CustomCheckboxPropsType> = ({
  className,
  children,
  id,
  hasError = false,
  errorText,
  ...rest
}) => {
  return (
    <div className={classNames(styles['form-checkbox'], className)}>
      <input
        className={classNames(styles['form-checkbox__input'])}
        id={id}
        {...rest}
      />
      <label
        className={classNames(styles['form-checkbox__label'])}
        htmlFor={id}
      >
        <HiCheckCircle
          className={classNames(styles['form-checkbox__label-check'])}
        />
        {children}
      </label>
      {hasError && (
        <div className={classNames(styles['form-checkbox__error'])}>
          {errorText}
        </div>
      )}
    </div>
  )
}

export default CustomCheckbox
