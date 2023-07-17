import React, { ButtonHTMLAttributes } from 'react'

import clsx from 'clsx'

import styles from './style.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutline?: boolean
  icon?: string
}

const Button: React.FC<ButtonProps> = ({
  className,
  icon,
  isOutline = false,
  children,
  disabled,
  ...props
}) => {
  const buttonClasses = clsx({
    [styles['button']]: true,
    [styles['outline']]: isOutline,
    [styles['primary']]: !isOutline,
    'opacity-40': disabled,
    [className ?? '']: true,
  })

  return (
    <button className={buttonClasses} disabled={disabled} {...props}>
      {icon && <i className={icon}></i>}
      {children}
    </button>
  )
}

export default Button
