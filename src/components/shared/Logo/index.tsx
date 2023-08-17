import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import logo from '@/assets/images/logo.png'

import styles from './style.module.scss'

const Logo: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={classNames(styles.logo, className)}>
      <Image
        className={classNames(styles.logo__image)}
        src={logo}
        alt="Run&Rush"
      />
    </div>
  )
}

export default Logo
