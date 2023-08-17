import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import coin from '@/assets/icons/coin.svg'

import styles from './style.module.scss'

const ReferralItem: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={classNames(styles['referral-item'], className)}>
      <div className={classNames(styles['referral-item__wrapper'])}>
        <div className={classNames(styles['referral-item__leading'])}>
          <div className={classNames(styles['referral-item__leading-circle'])}>
            <i
              className={classNames(
                styles['referral-item__icon'],
                'icon-avatar'
              )}
            ></i>
          </div>
        </div>
        <div className={classNames(styles['referral-item__body'])}>
          <div className={classNames(styles['referral-item__info'])}>
            <div className={classNames(styles['referral-item__info--date'])}>
              11.12.2022, 18:43
            </div>
            <div className={classNames(styles['referral-item__info--mail'])}>
              some@email.com
            </div>
          </div>
          <div className={classNames(styles['referral-item__value'])}>
            <Image
              src={coin}
              alt="Run&Rush Coin"
              className={classNames(styles['referral-item__value--coin'])}
            ></Image>
            <div className={classNames(styles['referral-item__value--count'])}>
              75
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralItem
