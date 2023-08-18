import classNames from 'classnames'
import React, { HTMLAttributes } from 'react'
import SimpleBar from 'simplebar-react'

import Loader from '@/components/UI/Loader'

import { useTransactions } from '../../hooks/useTransactions'
import TransactionItem from '../TransactionItem'

import styles from './style.module.scss'

const TransactionList: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const { isLoading, data: transactions } = useTransactions()
  if (isLoading) return <Loader loading size={16} />

  return (
    <div className={classNames(styles['balance-transaction-list'], className)}>
      {transactions?.length ? (
        <SimpleBar>
          {transactions?.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              transaction={transaction}
              className={classNames(styles['balance-transaction-list__item'])}
            />
          ))}
        </SimpleBar>
      ) : (
        <div>Empty</div>
      )}
    </div>
  )
}

export default TransactionList
