'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import Button from '@/components/UI/Button'

import coin from '@/assets/icons/coin.svg'

import { useAppSelector } from '@/store/hooks'

import TransactionList from './components/TransactionList'
import styles from './style.module.scss'

const AccountBalance: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const account = useAppSelector((state) => state.account.account)

  return (
    <section className={classNames(styles['balance'], className)}>
      <div className={classNames(styles['balance__wrapper'])}>
        <div
          className={classNames(
            styles['balance__info'],
            styles['balance-info']
          )}
        >
          <div className={classNames(styles['balance-info__wrapper'])}>
            <div className={classNames(styles['balance-info__title'])}>
              <Image
                className={classNames(styles['balance-info__title-coin'])}
                src={coin}
                alt="Run&Rush Coin"
              />
              <span>{account?.balance}</span>
            </div>
            <div className={classNames(styles['balance-info__actions'])}>
              <Button
                className={classNames(styles['balance-info__button'])}
                icon="icon-buy"
              >
                Buy
              </Button>
              <Button
                className={classNames(styles['balance-info__button'])}
                icon="icon-sell"
              >
                Sell
              </Button>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            styles['balance__transactions'],
            styles['balance-transactions']
          )}
        >
          <div className={classNames(styles['balance-transactions__wrapper'])}>
            <h3 className={classNames(styles['balance-transactions__title'])}>
              Transaction History
            </h3>
            <div className={classNames(styles['balance-transactions__body'])}>
              <TransactionList
                className={classNames(styles['balance-transactions__list'])}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountBalance
