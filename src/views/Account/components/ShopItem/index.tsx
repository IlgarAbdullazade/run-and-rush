import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes, ReactNode } from 'react'

import coin from '@/assets/icons/coin.svg'
import sneakersImg from '@/assets/images/shoes/mid-sneakers.png'

import styles from './style.module.scss'

type ShopItemPropsType = HTMLAttributes<HTMLDivElement> & {
  button: ReactNode
}

const ShopItem: React.FC<ShopItemPropsType> = ({ className, button }) => {
  return (
    <div className={classNames(styles['shop-item'], className)}>
      <div className={classNames(styles['shop-item__wrapper'])}>
        <div className={classNames(styles['shop-item__rect'])}>
          <Image
            src={sneakersImg}
            alt="Jogger"
            className={classNames(styles['shop-item__image'])}
          />
        </div>
        <div className={classNames(styles['shop-item__info'])}>
          <div className={classNames(styles['shop-item__title'])}>
            <h3>Jogger</h3>
            <span>4-10 km/h</span>
          </div>
          <div className={classNames(styles['shop-item__id'])}>#145265874</div>

          <div className={classNames(styles['shop-item__bonus'])}>
            <Image
              className={classNames(styles['shop-item__bonus-coin'])}
              src={coin}
              alt="Run&Rush Coin"
            />
            <span>0.0025</span>
          </div>
        </div>
        <div className={classNames(styles['shop-item__button'])}>{button}</div>
      </div>
    </div>
  )
}

export default ShopItem
