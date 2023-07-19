import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'
import { IPartnerItem } from '../../types'

type PartnersItemType = HTMLAttributes<HTMLDivElement> & {
  partner: IPartnerItem
}

const PartnersItem: React.FC<PartnersItemType> = ({ className, partner }) => {
  return (
    <div className={classNames(styles['partners-item'], className)}>
      <div className={classNames(styles['partners-item__wrapper'])}>
        <img
          src={partner.logo}
          alt={partner.name}
          className={classNames(styles['partners-item__logo'])}
        />
      </div>
    </div>
  )
}

export default PartnersItem
