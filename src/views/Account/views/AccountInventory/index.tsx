'use client'

import classNames from 'classnames'
import { HTMLAttributes, useEffect, useState } from 'react'

import CustomReactSelect from '@/components/UI/CustomReactSelect'
import { CustomOptionType } from '@/components/UI/CustomReactSelect/types'

import {
  ISneaker,
  SneakerDressStatusType,
  SneakerEarnedOrderingType,
} from '@/shared/types/sneakers.types'

import AccountTabs from '../../components/AccountTabs'
import { TabType } from '../../components/AccountTabs/types'
import ShopList from '../../components/ShopList'

import { useInventories } from './hooks/useInventories'
import styles from './style.module.scss'

const AccountInventory: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const {
    isLoading,
    data,
    setQueryParams,
    sneakerPutOnOrTakeOff,
    fetchNextPage,
    hasNextPage,
  } = useInventories()

  const orderingOptions: CustomOptionType<SneakerEarnedOrderingType>[] = [
    { value: 'LOWER', label: 'Lower Price' },
    { value: 'HIGHER', label: 'Higher Price' },
  ]

  const tabs: TabType<SneakerDressStatusType>[] = [
    { value: 'ALL', label: 'All' },
    { value: 'DRESSED', label: 'Dressed' },
  ]

  const [selectedOption, setSelectedOption] = useState(orderingOptions[0])

  const [selectedTab, setSelectedTab] = useState(tabs[0])

  const handleSelectChange = (option: any) => {
    setSelectedOption(option)
  }

  useEffect(() => {
    setQueryParams((prevParams) => ({
      ...prevParams,
      dress_status: selectedTab.value,
      earned_amount_ordering: selectedOption!.value,
    }))
  }, [selectedOption, selectedTab, setQueryParams])

  const inventories = data?.pages.reduce((acc, page) => {
    return [...acc, ...page.data]
  }, [] as ISneaker[])

  return (
    <div className={classNames(styles['inventory'], className)}>
      <div className={classNames(styles['inventory__wrapper'])}>
        <div className={classNames(styles['inventory__tabs'])}>
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
                buttonAction={sneakerPutOnOrTakeOff}
                listType="inventory"
                isLoading={isLoading}
                dataLength={inventories?.length || 0}
                next={() => fetchNextPage()}
                hasMore={hasNextPage ?? false}
                items={inventories}
              />
            ))}
          </AccountTabs>
        </div>
      </div>
    </div>
  )
}

export default AccountInventory
