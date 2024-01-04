'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import Button from '@/components/UI/Button'

import coin from '@/assets/icons/coin.svg'

import { Helpers } from '@/utils/helpers'
import { showToast } from '@/utils/toast/showToast'

import ReferralList from './components/ReferralList'
import { useReferralProfile } from './hooks/useReferralProfile'
import styles from './style.module.scss'

const AccountReferral: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const { data: referralProfile } = useReferralProfile()

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
                {referralProfile?.referrals_count}
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
                <span>{Helpers.toFixed(referralProfile?.balance)}</span>
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
                {referralProfile?.code}
              </div>
              <div
                className={classNames(
                  styles['referral-context__textfield--caption']
                )}
              >
                Friends must use your ID when sign up!
              </div>
            </div>
            <CopyToClipboard
              text={referralProfile?.code ?? ''}
              onCopy={() => {
                showToast('success', 'Referral code copied to clipboard')
              }}
            >
              <Button
                className={classNames(styles['referral-context__button'])}
              >
                Copy Link
              </Button>
            </CopyToClipboard>
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
              <ReferralList
                className={classNames(styles['referral-history__list'])}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AccountReferral
