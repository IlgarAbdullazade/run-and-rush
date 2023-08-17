import classNames from 'classnames'
import React from 'react'
import {
  AiFillCheckCircle,
  AiFillInfoCircle,
  AiFillWarning,
} from 'react-icons/ai'
import { IoCloseSharp } from 'react-icons/io5'
import { ToastContentProps } from 'react-toastify'

import styles from './style.module.scss'

export type ToastType = 'error' | 'info' | 'warning' | 'success'

type ToastPropsType = Partial<ToastContentProps> & {
  type: ToastType
  text: string
}

const titles = {
  error: 'Error',
  info: 'Info',
  warning: 'Warning',
  success: 'Success',
}

const icons = {
  error: <AiFillInfoCircle />,
  info: <AiFillInfoCircle />,
  warning: <AiFillWarning />,
  success: <AiFillCheckCircle />,
}

const Toast: React.FC<ToastPropsType> = ({ text, type, closeToast }) => {
  return (
    <div className={classNames(styles['toast'])}>
      <div className={classNames(styles['toast__wrapper'])}>
        <div className={classNames(styles['toast__body'])}>
          <div
            className={classNames(
              styles['toast__leading'],
              styles[`toast__title--${type}`]
            )}
          >
            {icons[type]}
          </div>
          <div className={classNames(styles['toast__context'])}>
            <h4
              className={classNames(
                styles['toast__title'],
                styles[`toast__title--${type}`]
              )}
            >
              {titles[type]}
            </h4>
            <span className={classNames(styles['toast__text'])}>{text}</span>
          </div>
        </div>
        <div
          onClick={closeToast}
          className={classNames(styles['toast__close'])}
        >
          <IoCloseSharp />
        </div>
      </div>
    </div>
  )
}

export default Toast
