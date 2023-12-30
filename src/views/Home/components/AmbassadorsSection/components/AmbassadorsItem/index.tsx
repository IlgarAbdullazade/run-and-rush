import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import { HTMLAttributes, ReactElement } from 'react'

import styles from './style.module.scss'

type AmbassadorsItemType = HTMLAttributes<HTMLDivElement> & {
  name: string
  location: string
  image: StaticImageData
  stroke?: ReactElement
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
            <Image
              fill
              src={image}
              alt={name}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'cover' }}
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
