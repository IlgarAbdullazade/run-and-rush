'use client'

import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import SimpleBar from 'simplebar-react'

import Button from '@/components/UI/Button'

import ShopItem from '../ShopItem'

import styles from './style.module.scss'

type ShopListPropsType = HTMLAttributes<HTMLDivElement> & {
  count: number
  dressed?: boolean
}

const ShopList: React.FC<ShopListPropsType> = ({
  className,
  count,
  dressed = false,
}) => {
  return (
    <section className={classNames(styles['shop-list'], className)}>
      <div className={classNames(styles['shop-list__wrapper'])}>
        <SimpleBar>
          <div className={classNames(styles['shop-list__body'])}>
            {Array.from(Array(count), (_, i) => (
              <ShopItem
                key={i}
                className={classNames(styles['shop-list__item'])}
                button={
                  <Button
                    isOutline={i % 3 === 0 || dressed}
                    className={classNames(styles['shop-item__button'])}
                  >
                    {i % 3 === 0 || dressed ? 'Dressed' : 'Put'}
                  </Button>
                }
              />
            ))}
          </div>
        </SimpleBar>
      </div>
    </section>
  )
}

export default ShopList
