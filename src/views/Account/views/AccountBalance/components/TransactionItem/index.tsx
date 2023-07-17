import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import coin from '@/assets/icons/coin.svg'

import styles from './style.module.scss'

const TransactionItem: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={classNames(styles['transaction-item'], className)}>
      <div className={classNames(styles['transaction-item__wrapper'])}>
        <div className={classNames(styles['transaction-item__leading'])}>
          <i
            className={classNames(
              styles['transaction-item__icon'],
              'icon-sell'
            )}
          ></i>
        </div>
        <div className={classNames(styles['transaction-item__body'])}>
          <div className={classNames(styles['transaction-item__info'])}>
            <div className={classNames(styles['transaction-item__info--date'])}>
              11.12.2022, 18:43
            </div>
            <div className={classNames(styles['transaction-item__info--type'])}>
              Withdraw
            </div>
          </div>
          <div className={classNames(styles['transaction-item__value'])}>
            <div
              className={classNames(styles['transaction-item__value--type'])}
            >
              +
            </div>
            <img
              src={coin}
              alt="Run&Rush Coin"
              className={classNames(styles['transaction-item__value--coin'])}
            ></img>
            <div
              className={classNames(styles['transaction-item__value--count'])}
            >
              2500
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransactionItem
