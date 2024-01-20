import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes, ReactNode } from 'react'

import {
  ISneaker,
  ISneakerProduct,
  isSneakerProduct,
} from '@/shared/types/sneakers.types'

import coin from '@/assets/icons/coin.svg'
import calendar from '@/assets/icons/calendar.svg'

import { Helpers } from '@/utils/helpers'

import styles from './style.module.scss'

type ShopItemPropsType = HTMLAttributes<HTMLDivElement> & {
  button: ReactNode
  item: ISneaker | ISneakerProduct
}

const ShopItem: React.FC<ShopItemPropsType> = ({ className, button, item }) => {
  let availableCoins = 0;
  let availableDays = 0;
  if(!isSneakerProduct(item)) {
    availableCoins = item.durability * (+item.profit * 2)
    let now = new Date();
    let created_at = new Date(item.created_at);
    availableDays = Math.ceil(Math.abs(now.getTime() - created_at.getTime()) / (1000 * 3600 * 24))
  }
  
  return (
    <div className={classNames(styles['shop-item'], className)}>
      <div className={classNames(styles['shop-item__wrapper'])}>
        <div className={classNames(styles['shop-item__rect'])}>
          <Image
            src={
              isSneakerProduct(item) ? item.sneaker.image_url : item.image_url
            }
            alt={isSneakerProduct(item) ? item.sneaker.title : item.title}
            width={180}
            height={160}
            className={classNames(styles['shop-item__image'])}
          />
        </div>
        <div className={classNames(styles['shop-item__info'])}>
          <div className={classNames(styles['shop-item__title'])}>
            <h3>{isSneakerProduct(item) ? item.sneaker.title : item.title}</h3>
          </div>
          <div className={classNames(styles['shop-item__id'])}>
            #
            {Helpers.splitUUID(
              isSneakerProduct(item) ? item.sneaker.id : item.id
            )}
          </div>

          <div className={classNames(styles['shop-item__statistics'])}>
            <div className={classNames(styles['shop-item__statistics-item'])}>
              <Image
                className={classNames(styles['shop-item__statistics-coin'])}
                src={coin}
                alt="Run&Rush Coin"
              />
              <span>
                {isSneakerProduct(item) ? Helpers.toFixed(item.price) : `${Helpers.toFixed(item.earned_amount)} / ${availableCoins}`}
              </span>
            </div>
            {isSneakerProduct(item) ? (
              <></>
            ) : (
              <div className={classNames(styles['shop-item__statistics-item'])}>
                <Image
                  className={classNames(styles['shop-item__statistics-coin'])}
                  src={calendar}
                  alt="Run&Rush Calendar"
                />
                <span>
                  {`${availableDays} / ${item.durability}`}
                </span>
              </div>
            )}
          </div>
        </div>
        <div className={classNames(styles['shop-item__button'])}>{button}</div>
      </div>
    </div>
  )
}

export default ShopItem
