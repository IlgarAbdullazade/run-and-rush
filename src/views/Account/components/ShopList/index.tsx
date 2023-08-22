'use client'

import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import type { Props } from 'react-infinite-scroll-component'
import SimpleBar from 'simplebar-react'
import type { SetOptional } from 'type-fest'

import Button from '@/components/UI/Button'
import Loader from '@/components/UI/Loader'

import {
  ISneaker,
  ISneakerProduct,
  isSneakerProduct,
} from '@/shared/types/sneakers.types'

import ShopItem from '../ShopItem'

import styles from './style.module.scss'

type ListType = 'inventory' | 'shop'

type ShopListPropsType = HTMLAttributes<HTMLDivElement> &
  SetOptional<Props, 'loader' | 'children'> & {
    items: ISneaker[] | ISneakerProduct[] | undefined
    isLoading: boolean
    listType: ListType
    buttonAction: (sneaker: any) => Promise<void>
  }

const ShopList: React.FC<ShopListPropsType> = ({
  className,
  isLoading,
  listType,
  items,
  buttonAction,
  ...infiniteScrollProps
}) => {
  const shopItemButton = (item: ISneaker | ISneakerProduct): ReactNode => {
    const handleClick = () => {
      if (listType === 'inventory' && !isSneakerProduct(item)) {
        buttonAction(item)
      } else {
        const product = item as ISneakerProduct
        buttonAction(product)
      }
    }

    const buttonText =
      listType === 'inventory' && !isSneakerProduct(item)
        ? item.is_dressed
          ? 'Dressed'
          : 'Put'
        : 'Buy'

    return (
      <Button
        onClick={handleClick}
        isOutline={
          listType === 'inventory' && !isSneakerProduct(item) && item.is_dressed
        }
        className={classNames(styles['shop-item__button'])}
      >
        {buttonText}
      </Button>
    )
  }

  if (isLoading) return <Loader loading size={16} />

  return (
    <section className={classNames(styles['shop-list'], className)}>
      <div className={classNames(styles['shop-list__wrapper'])}>
        {items?.length ? (
          <SimpleBar scrollableNodeProps={{ id: 'simpleBar' }}>
            <InfiniteScroll
              loader={
                <div className="mt-10">
                  <Loader loading size={12} />
                </div>
              }
              endMessage={
                <div className="mt-10 text-center">
                  <b>Yay! You have seen it all</b>
                </div>
              }
              scrollableTarget="simpleBar"
              {...infiniteScrollProps}
            >
              <div className={classNames(styles['shop-list__body'])}>
                {items?.map((item) => (
                  <ShopItem
                    key={item.id}
                    item={item}
                    className={classNames(styles['shop-list__item'])}
                    button={shopItemButton(item)}
                  />
                ))}
              </div>
            </InfiniteScroll>
          </SimpleBar>
        ) : (
          <div className={classNames(styles['shop-list__empty'])}>
            Items not found
          </div>
        )}
      </div>
    </section>
  )
}

export default ShopList
