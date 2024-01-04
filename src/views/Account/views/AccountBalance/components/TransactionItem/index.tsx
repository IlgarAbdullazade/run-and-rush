import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import DateString from '@/components/UI/DateString'

import { ITransaction } from '@/shared/types/transaction.types'

import coin from '@/assets/icons/coin.svg'

import { Helpers } from '@/utils/helpers'

import styles from './style.module.scss'

type TransactionItemProps = HTMLAttributes<HTMLDivElement> & {
  transaction: ITransaction
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  className,
  transaction,
}) => {
  const isWithdraw = transaction.operation_type === 'WITHDRAW'

  return (
    <div className={classNames(styles['transaction-item'], className)}>
      <div className={classNames(styles['transaction-item__wrapper'])}>
        <div className={classNames(styles['transaction-item__leading'])}>
          <i
            className={classNames(
              styles['transaction-item__icon'],
              isWithdraw ? 'icon-sell' : 'icon-buy'
            )}
          ></i>
        </div>
        <div className={classNames(styles['transaction-item__body'])}>
          <div className={classNames(styles['transaction-item__info'])}>
            <div className={classNames(styles['transaction-item__info--date'])}>
              <DateString>{transaction.updated_at}</DateString>
            </div>
            <div className={classNames(styles['transaction-item__info--type'])}>
              {transaction.operation_type}
            </div>
          </div>
          <div className={classNames(styles['transaction-item__value'])}>
            <div
              className={classNames(styles['transaction-item__value--type'])}
            >
              {isWithdraw ? '-' : '+'}
            </div>
            <Image
              src={coin}
              alt="Run&Rush Coin"
              className={classNames(styles['transaction-item__value--coin'])}
            ></Image>
            <div
              className={classNames(styles['transaction-item__value--count'])}
            >
              <span>{Helpers.toFixed(transaction.amount)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionItem
