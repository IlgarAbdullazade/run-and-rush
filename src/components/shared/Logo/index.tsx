import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import logo from '@/assets/images/logo.png'

import styles from './style.module.scss'

const Logo: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={classNames(styles.logo, className)}>
      <img
        className={classNames(styles.logo__image)}
        src={logo}
        alt="Run and Rush"
      />
    </div>
  )
}

export default Logo
