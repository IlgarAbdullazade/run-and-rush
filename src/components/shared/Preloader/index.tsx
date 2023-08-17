import classNames from 'classnames'
import { HTMLAttributes } from 'react'

import Loader from '@/components/UI/Loader'

import styles from './style.module.scss'

const Preloader: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={classNames(styles['preloader'], className)}>
      <div className={classNames(styles['preloader__loader'])}>
        <div className={classNames(styles['preloader__loader--dot'])}></div>
        <div className={classNames(styles['preloader__loader--dot'])}></div>
        <div className={classNames(styles['preloader__loader--dot'])}></div>
      </div>
    </div>
  )
}

export default Preloader
