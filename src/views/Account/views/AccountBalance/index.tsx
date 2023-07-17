import { HTMLAttributes } from 'react'

import classNames from 'classnames'
import SimpleBar from 'simplebar-react'

import coin from '@/assets/icons/coin.svg'
import Button from '@/components/UI/Button'

import styles from './style.module.scss'
import TransactionItem from './components/TransactionItem'

const AccountBalance: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
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
              <img
                className={classNames(styles['balance-info__title-coin'])}
                src={coin}
                alt="Run&Rush Coin"
              />
              <span>273.54</span>
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
              <SimpleBar>
                {Array.from(Array(20), (_, i) => (
                  <TransactionItem
                    key={i}
                    className={classNames(styles['balance-transactions__item'])}
                  />
                ))}
              </SimpleBar>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountBalance
