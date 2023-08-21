'use client'

import classNames from 'classnames'
import { HTMLAttributes, useEffect, useState } from 'react'

import CustomReactSelect from '@/components/UI/CustomReactSelect'
import { CustomOptionType } from '@/components/UI/CustomReactSelect/types'

import {
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
    data: products,
    setQueryParams,
    submitBuySneaker,
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
      offset: 0,
    })
  }, [selectedOption, selectedTab, setQueryParams])

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
                listType="shop"
                isLoading={isLoading}
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
