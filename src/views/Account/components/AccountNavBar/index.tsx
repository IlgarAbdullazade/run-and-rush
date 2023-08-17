import classNames from 'classnames'
import { HTMLAttributes } from 'react'

import ActiveLink from '@/components/UI/ActiveLink'

import styles from './style.module.scss'

const AccountNavBar: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <nav className={classNames(styles['account-navbar'], className)}>
      <div className={classNames(styles['account-navbar__wrapper'])}>
        <ul className={classNames(styles['account-navbar__list'])}>
          <li className={classNames(styles['account-navbar__item'])}>
            <ActiveLink
              activeClassName="text-gradient"
              className="text-gradient-hover"
              href="/account"
            >
              Dashboard
            </ActiveLink>
          </li>
          <li className={classNames(styles['account-navbar__item'])}>
            <ActiveLink
              activeClassName="text-gradient"
              className="text-gradient-hover"
              href="/account/balance"
            >
              Balance
            </ActiveLink>
          </li>
          <li className={classNames(styles['account-navbar__item'])}>
            <ActiveLink
              activeClassName="text-gradient"
              className="text-gradient-hover"
              href="/account/inventory"
            >
              Inventory
            </ActiveLink>
          </li>
          <li className={classNames(styles['account-navbar__item'])}>
            <ActiveLink
              activeClassName="text-gradient"
              className="text-gradient-hover"
              href="/account/shop"
            >
              Shop
            </ActiveLink>
          </li>
          <li className={classNames(styles['account-navbar__item'])}>
            <ActiveLink
              activeClassName="text-gradient"
              className="text-gradient-hover"
              href="/account/referral-program"
            >
              Referral program
            </ActiveLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AccountNavBar
