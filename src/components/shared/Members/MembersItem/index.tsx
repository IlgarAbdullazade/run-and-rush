import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import Image from 'next/image'

import { IMemberItem } from '../types'
import styles from './style.module.scss'

type MembersItemType = HTMLAttributes<HTMLDivElement> & {
  skewClass?: string,
  member: IMemberItem
}

const MembersItem: React.FC<MembersItemType> = ({
  className,
  member,
  skewClass = 'skew-x-8',
}) => {
  return (
    <div className={classNames(styles['members-item'], className)}>
      <div className={classNames(styles['members-item__wrapper'])}>
        <div className={classNames(styles['members-item__rect'])}>
          <div
            className={classNames(
              styles['members-item__background'],
              skewClass
            )}
          ></div>
          <Image
            src={member.image}
            alt={member.name}
            className={classNames(styles['members-item__image'])}
          />
        </div>
        <div className={classNames(styles['members-item__info'])}>
          <div className={classNames(styles['members-item__name'])}>
            {member.name}
          </div>
          {member.position && <div className={classNames(styles['members-item__position'])}>
            {member.position}
          </div>}
        </div>
      </div>
    </div>
  )
}

export default MembersItem
