import classNames from 'classnames'

import styles from './style.module.scss'
import { AnchorHTMLAttributes } from 'react'

type PartnersItemType = AnchorHTMLAttributes<HTMLAnchorElement> & {
  name: string
  logo: string
}

const PartnersItem: React.FC<PartnersItemType> = ({
  className,
  href,
  logo,
  name,
}) => {
  return (
    <a
      href={href}
      target="_blank"
      className={classNames(styles['partners-item'], className)}
    >
      <div className={classNames(styles['partners-item__wrapper'])}>
        <img
          src={logo}
          alt={name}
          className={classNames(styles['partners-item__logo'])}
        />
      </div>
    </a>
  )
}

export default PartnersItem
