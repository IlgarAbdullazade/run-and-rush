import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import humanImg from '@/assets/images/human.png'

import styles from './style.module.scss'

type MembersItemType = HTMLAttributes<HTMLDivElement> & {
  skewClass?: string
}

const MembersItem: React.FC<MembersItemType> = ({
  className,
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
          <img
            src={humanImg}
            alt="Human"
            className={classNames(styles['members-item__image'])}
          />
        </div>
        <div className={classNames(styles['members-item__info'])}>
          <div className={classNames(styles['members-item__name'])}>
            Ajay French
          </div>
          <div className={classNames(styles['members-item__position'])}>
            CEO
          </div>
        </div>
      </div>
    </div>
  )
}

export default MembersItem
