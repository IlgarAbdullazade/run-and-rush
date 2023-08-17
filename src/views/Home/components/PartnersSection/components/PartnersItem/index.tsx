import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import { IPartnerItem } from '../../types'

import styles from './style.module.scss'

type PartnersItemType = HTMLAttributes<HTMLDivElement> & {
  partner: IPartnerItem
}

const PartnersItem: React.FC<PartnersItemType> = ({ className, partner }) => {
  return (
    <div className={classNames(styles['partners-item'], className)}>
      <div className={classNames(styles['partners-item__wrapper'])}>
        <Image
          src={partner.logo}
          alt={partner.name}
          className={classNames(styles['partners-item__logo'])}
        />
      </div>
    </div>
  )
}

export default PartnersItem
