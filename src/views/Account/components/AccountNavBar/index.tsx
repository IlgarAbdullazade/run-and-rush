import { HTMLAttributes } from 'react'

import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import styles from './style.module.scss'

const AccountNavBar: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <nav className={classNames(styles['account-navbar'], className)}>
      <div className={classNames(styles['account-navbar__wrapper'])}>
        <ul className={classNames(styles['account-navbar__list'])}>
          <li className={classNames(styles['account-navbar__item'])}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-gradient' : 'text-gradient-hover'
              }
              to="dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          <li className={classNames(styles['account-navbar__item'])}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-gradient' : 'text-gradient-hover'
              }
              to="balance"
            >
              Balance
            </NavLink>
          </li>
          <li className={classNames(styles['account-navbar__item'])}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-gradient' : 'text-gradient-hover'
              }
              to="inventory"
            >
              Inventory
            </NavLink>
          </li>
          <li className={classNames(styles['account-navbar__item'])}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-gradient' : 'text-gradient-hover'
              }
              to="shop"
            >
              Shop
            </NavLink>
          </li>
          <li className={classNames(styles['account-navbar__item'])}>
            <NavLink
              className={({ isActive }) =>
                isActive ? 'text-gradient' : 'text-gradient-hover'
              }
              to="referral-program"
            >
              Referral program
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default AccountNavBar
