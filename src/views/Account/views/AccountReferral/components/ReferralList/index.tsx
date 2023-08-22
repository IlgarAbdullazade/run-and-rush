import classNames from 'classnames'
import React, { HTMLAttributes } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import SimpleBar from 'simplebar-react'

import Loader from '@/components/UI/Loader'

import { IReferralReward } from '@/shared/types/referral.types'

import { useReferralRewards } from '../../hooks/useReferralRewards'
import ReferralItem from '../ReferralItem'

import styles from './style.module.scss'

const ReferralList: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const { isLoading, data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useReferralRewards()

  const referrals = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data]
  }, [] as IReferralReward[])

  if (isLoading) return <Loader loading size={16} />

  return (
    <div className={classNames(styles['referral-history-list'], className)}>
      {referrals?.length ? (
        <SimpleBar scrollableNodeProps={{ id: 'simpleBar' }}>
          <InfiniteScroll
            loader={
              <div
                style={{
                  visibility: isFetchingNextPage ? 'visible' : 'hidden',
                }}
                className="mt-10"
              >
                <Loader loading size={12} />
              </div>
            }
            endMessage={
              <div className="mt-10 text-center">
                <b>Yay! You have seen it all</b>
              </div>
            }
            scrollableTarget="simpleBar"
            dataLength={referrals?.length || 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage ?? false}
          >
            <div className={classNames(styles['shop-list__body'])}>
              {referrals?.map((referral) => (
                <ReferralItem
                  key={referral.id}
                  referral={referral}
                  className={classNames(styles['referral-history-list__item'])}
                />
              ))}
            </div>
          </InfiniteScroll>
        </SimpleBar>
      ) : (
        <div className={classNames(styles['referral-history-list__empty'])}>
          Items not found
        </div>
      )}
    </div>
  )
}

export default ReferralList
