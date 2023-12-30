import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import sneakersImg from '@/assets/images/shoes/orange-sneakers.png'

import styles from './style.module.scss'

const SneakersCard: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={classNames(styles['sneakers-card'], className)}>
      <div className={classNames(styles['sneakers-card__wrapper'])}>
        <div className={classNames(styles['sneakers-card__rect'])}>
          <Image
            src={sneakersImg}
            alt="Jogger"
            className={classNames(styles['sneakers-card__image'])}
          />
        </div>
        <div className={classNames(styles['sneakers-card__info'])}>
          <div className={classNames(styles['sneakers-card__title'])}>
            <h3>Jogger</h3>
            <span>4-10 km/h</span>
          </div>
          <div className={classNames(styles['sneakers-card__id'])}>
            #145265874
          </div>
        </div>
      </div>
    </div>
  )
}

export default SneakersCard
