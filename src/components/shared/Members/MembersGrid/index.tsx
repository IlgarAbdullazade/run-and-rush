import classNames from 'classnames'
import { HTMLAttributes } from 'react'

import MembersItem from '../MembersItem'
import { IMemberItem } from '../types'

import styles from './style.module.scss'

type MembersGridType = HTMLAttributes<HTMLDivElement> & {
  members: IMemberItem[]
}

const MembersGrid: React.FC<MembersGridType> = ({ className, members }) => {
  return (
    <div className={classNames(styles['members'], className)}>
      <div className={classNames(styles['members__wrapper'])}>
        {members.map((member) => (
          <MembersItem
            key={member.name}
            member={member}
            className={classNames(styles['members__item'])}
          />
        ))}
      </div>
    </div>
  )
}

export default MembersGrid
