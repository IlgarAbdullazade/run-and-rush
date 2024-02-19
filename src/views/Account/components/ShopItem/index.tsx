import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes, ReactNode } from 'react'

import {
  ISneaker,
  ISneakerProduct,
  isSneakerProduct,
} from '@/shared/types/sneakers.types'

import calendar from '@/assets/icons/calendar.svg'
import coin from '@/assets/icons/coin.svg'

import { Helpers } from '@/utils/helpers'

import styles from './style.module.scss'

type ShopItemPropsType = HTMLAttributes<HTMLDivElement> & {
  button: ReactNode
  item: ISneaker | ISneakerProduct
}

const ShopItem: React.FC<ShopItemPropsType> = ({ className, button, item }) => {
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
                {isSneakerProduct(item)
                  ? Helpers.toFixed(item.price)
                  : `${Helpers.toFixed(
                      item.earned_amount.toString()
                    )} / ${Helpers.toFixed(
                      item.max_earned_amount.toString(),
                      0
                    )}`}
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
                <span>{`${item.durability} / ${item.max_durability}`}</span>
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
