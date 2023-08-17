'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import SimpleBar from 'simplebar-react'

import Button from '@/components/UI/Button'

import coin from '@/assets/icons/coin.svg'

import ReferralItem from './components/ReferralItem'
import styles from './style.module.scss'

const AccountReferral: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className={classNames(styles['referral'], className)}>
      <div className={classNames(styles['referral__wrapper'])}>
        <div
          className={classNames(
            styles['referral__info'],
            styles['referral-info']
          )}
        >
          <div className={classNames(styles['referral-info__wrapper'])}>
            <div className={classNames(styles['referral-info__column'])}>
              <div className={classNames(styles['referral-info__title'])}>
                14
              </div>
              <div className={classNames(styles['referral-info__caption'])}>
                Referrals
              </div>
            </div>
            <div className={classNames(styles['referral-info__column'])}>
              <div className={classNames(styles['referral-info__title'])}>
                <Image
                  className={classNames(styles['referral-info__title-coin'])}
                  src={coin}
                  alt="Run&Rush Coin"
                />
                <span>273.54</span>
              </div>
              <div className={classNames(styles['referral-info__caption'])}>
                Earned (for all time)
              </div>
            </div>
          </div>
        </div>
        <div
          className={classNames(
            styles['referral__context'],
            styles['referral-context']
          )}
        >
          <div className={classNames(styles['referral-context__wrapper'])}>
            <h3 className={classNames(styles['referral-context__title'])}>
              Refer friends. <br /> Earn Money
            </h3>
            <p className={classNames(styles['referral-context__text'])}>
              Invite friends to sign up using your link and you&apos;ll get 10%
              of their purchase
            </p>
            <div className={classNames(styles['referral-context__textfield'])}>
              <div
                className={classNames(
                  styles['referral-context__textfield--caption']
                )}
              >
                Your referral ID
              </div>
              <div
                className={classNames(
                  styles['referral-context__textfield--block']
                )}
              >
                345465
              </div>
              <div
                className={classNames(
                  styles['referral-context__textfield--caption']
                )}
              >
                Friends must use your ID when sign up!
              </div>
            </div>
            <Button className={classNames(styles['referral-context__button'])}>
              Copy Link
            </Button>
          </div>
        </div>
        <div
          className={classNames(
            styles['referral__history'],
            styles['referral-history']
          )}
        >
          <div className={classNames(styles['referral-history__wrapper'])}>
            <h3 className={classNames(styles['referral-history__title'])}>
              Reward From Referrals
            </h3>
            <div className={classNames(styles['referral-history__body'])}>
              <SimpleBar>
                {Array.from(Array(20), (_, i) => (
                  <ReferralItem
                    key={i}
                    className={classNames(styles['referral-history__item'])}
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

export default AccountReferral
