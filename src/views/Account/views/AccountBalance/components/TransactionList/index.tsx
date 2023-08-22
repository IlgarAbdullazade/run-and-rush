import classNames from 'classnames'
import React, { HTMLAttributes } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import SimpleBar from 'simplebar-react'

import Loader from '@/components/UI/Loader'

import { ITransaction } from '@/shared/types/transaction.types'

import { useTransactions } from '../../hooks/useTransactions'
import TransactionItem from '../TransactionItem'

import styles from './style.module.scss'

const TransactionList: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const { isLoading, data, fetchNextPage, isFetchingNextPage, hasNextPage } =
    useTransactions()

  const transactions = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data]
  }, [] as ITransaction[])

  if (isLoading) return <Loader loading size={16} />

  return (
    <div className={classNames(styles['balance-transaction-list'], className)}>
      {transactions?.length ? (
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
            dataLength={transactions?.length || 0}
            next={() => fetchNextPage()}
            hasMore={hasNextPage ?? false}
          >
            {transactions?.map((transaction) => (
              <TransactionItem
                key={transaction.id}
                transaction={transaction}
                className={classNames(styles['balance-transaction-list__item'])}
              />
            ))}
          </InfiniteScroll>
        </SimpleBar>
      ) : (
        <div className={classNames(styles['balance-transaction-list__empty'])}>
          Items not found
        </div>
      )}
    </div>
  )
}

export default TransactionList
