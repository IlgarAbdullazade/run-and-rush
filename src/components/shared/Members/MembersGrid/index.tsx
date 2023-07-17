import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'
import MembersItem from '../MembersItem'

const MembersGrid: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={classNames(styles['members'], className)}>
      <div className={classNames(styles['members__wrapper'])}>
        <MembersItem className={classNames(styles['members__item'])} />
        <MembersItem className={classNames(styles['members__item'])} />
        <MembersItem className={classNames(styles['members__item'])} />
        <MembersItem className={classNames(styles['members__item'])} />
      </div>
    </div>
  )
}

export default MembersGrid
