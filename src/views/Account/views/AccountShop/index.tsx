'use client'

import classNames from 'classnames'
import { HTMLAttributes, useEffect, useState } from 'react'

import CustomReactSelect from '@/components/UI/CustomReactSelect'
import type { CustomOptionType } from '@/components/UI/CustomReactSelect/types'

import {
  ISneakerProduct,
  SneakerActionType,
  SneakerPriceOrderingType,
} from '@/shared/types/sneakers.types'

import AccountTabs from '../../components/AccountTabs'
import { TabType } from '../../components/AccountTabs/types'
import ShopList from '../../components/ShopList'

import { useShop } from './hooks/useShop'
import styles from './style.module.scss'

const AccountShop: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const {
    isLoading,
    data,
    setQueryParams,
    submitBuySneaker,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useShop()

  const orderingOptions: CustomOptionType<SneakerPriceOrderingType>[] = [
    { value: 'LOWER', label: 'Lower Price' },
    { value: 'HIGHER', label: 'Higher Price' },
  ]

  const tabs: TabType<SneakerActionType>[] = [
    { value: 'BUY', label: 'Buy' },
    { value: 'SELL', label: 'Sell', disabled: true },
  ]

  const [selectedOption, setSelectedOption] = useState(orderingOptions[0])

  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const handleSelectChange = (option: any) => {
    setSelectedOption(option)
  }

  useEffect(() => {
    setQueryParams({
      price_ordering: selectedOption!.value,
    })
  }, [selectedOption, selectedTab, setQueryParams])

  const products = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data]
  }, [] as ISneakerProduct[])

  return (
    <div className={classNames(styles['shop'], className)}>
      <div className={classNames(styles['shop__wrapper'])}>
        <div className={classNames(styles['shop__tabs'])}>
          <AccountTabs
            defaultIndex={0}
            onSelect={(index) => setSelectedTab(tabs[index])}
            tabs={tabs}
            select={
              <CustomReactSelect
                value={selectedOption}
                options={orderingOptions}
                isSearchable={false}
                onChange={handleSelectChange}
              />
            }
          >
            {tabs.map((tab) => (
              <ShopList
                key={tab.value}
                buttonAction={submitBuySneaker}
                listType="inventory"
                isLoading={isLoading}
                dataLength={products?.length || 0}
                next={() => fetchNextPage()}
                hasMore={hasNextPage ?? false}
                hideListLoading={isFetchingNextPage}
                items={products}
              />
            ))}
          </AccountTabs>
        </div>
      </div>
    </div>
  )
}

export default AccountShop
