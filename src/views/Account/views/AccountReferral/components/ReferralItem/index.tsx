import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import DateString from '@/components/UI/DateString'

import { IReferralReward } from '@/shared/types/referral.types'

import coin from '@/assets/icons/coin.svg'

import styles from './style.module.scss'

type TransactionItemProps = HTMLAttributes<HTMLDivElement> & {
  referral: IReferralReward
}

const ReferralItem: React.FC<TransactionItemProps> = ({
  className,
  referral,
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
              <DateString>{referral.created_at}</DateString>
            </div>
            <div className={classNames(styles['referral-item__info--mail'])}>
              {referral.user_from_email}
            </div>
          </div>
          <div className={classNames(styles['referral-item__value'])}>
            <Image
              src={coin}
              alt="Run&Rush Coin"
              className={classNames(styles['referral-item__value--coin'])}
            ></Image>
            <div className={classNames(styles['referral-item__value--count'])}>
              {referral.amount}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReferralItem
