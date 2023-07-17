import { HTMLAttributes, ReactElement } from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'

type AmbassadorsItemType = HTMLAttributes<HTMLDivElement> & {
  name: string
  location: string
  image: string
  stroke: ReactElement
}

const AmbassadorsItem: React.FC<AmbassadorsItemType> = ({
  className,
  name,
  location,
  image,
  stroke,
}) => {
  return (
    <div className={classNames(styles['ambassadors-item'], className)}>
      <div className={classNames(styles['ambassadors-item__wrapper'])}>
        <div className={classNames(styles['ambassadors-item__leading'])}>
          <div className={classNames(styles['ambassadors-item__rect'])}>
            <img
              src={image}
              alt={name}
              className={classNames(styles['ambassadors-item__image'])}
            />
          </div>
          {stroke}
        </div>
        <div className={classNames(styles['ambassadors-item__context'])}>
          <h2 className={classNames(styles['ambassadors-item__name'])}>
            {name}
          </h2>
          <div className={classNames(styles['ambassadors-item__location'])}>
            {location}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmbassadorsItem
