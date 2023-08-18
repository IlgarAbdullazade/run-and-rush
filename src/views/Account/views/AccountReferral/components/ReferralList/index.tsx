import classNames from 'classnames'
import React, { HTMLAttributes } from 'react'
import SimpleBar from 'simplebar-react'

import Loader from '@/components/UI/Loader'

import { useReferralRewards } from '../../hooks/useReferralRewards'
import ReferralItem from '../ReferralItem'

import styles from './style.module.scss'

const ReferralList: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const { isLoading, data: referrals } = useReferralRewards()
  if (isLoading) return <Loader loading size={16} />

  return (
    <div className={classNames(styles['referral-history-list'], className)}>
      {referrals?.length ? (
        <SimpleBar>
          {referrals?.map((referral) => (
            <ReferralItem
              key={referral.id}
              referral={referral}
              className={classNames(styles['referral-history-list__item'])}
            />
          ))}
        </SimpleBar>
      ) : (
        <div>Empty</div>
      )}
    </div>
  )
}

export default ReferralList
