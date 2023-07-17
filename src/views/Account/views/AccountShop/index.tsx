import { HTMLAttributes, useState } from 'react'

import classNames from 'classnames'

import CustomReactSelect from '@/components/UI/CustomReactSelect'
import {
  CustomOptionType,
  CustomSelectOnChangeTypes,
} from '@/components/UI/CustomReactSelect/types'

import styles from './style.module.scss'
import ShopList from '../../components/ShopList'
import AccountTabs from '../../components/AccountTabs'

const AccountShop: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const options: CustomOptionType[] = [
    { value: 'low_price', label: 'Lower Price' },
    { value: 'higher_price', label: 'Higher Price' },
    { value: 'newest_first', label: 'Newest First' },
  ]

  const [selectedOption, setSelectedOption] =
    useState<CustomSelectOnChangeTypes>(options[0])

  const handleSelectChange = (option: CustomSelectOnChangeTypes) => {
    setSelectedOption(option)
    console.log(option)
  }

  return (
    <div className={classNames(styles['shop'], className)}>
      <div className={classNames(styles['shop__wrapper'])}>
        <div className={classNames(styles['shop__tabs'])}>
          <AccountTabs
            select={
              <CustomReactSelect
                value={selectedOption}
                options={options}
                isSearchable={false}
                onChange={handleSelectChange}
              />
            }
            tabs={['Buy', 'Sell']}
          >
            <ShopList count={15} />
            <ShopList count={5} dressed />
          </AccountTabs>
        </div>
      </div>
    </div>
  )
}

export default AccountShop
