import { HTMLAttributes } from 'react'

import classNames from 'classnames'
import { Outlet } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

import runnerBgImg from '@/assets/images/runner-bg.png'

import styles from './style.module.scss'
import AccountNavBar from './components/AccountNavBar'

const AccountView: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1024px)',
  })

  return (
    <div className={classNames(styles['account'], className)}>
      <div className={classNames(styles['account__container'])}>
        <div className={classNames(styles['account__background'])}>
          <div
            className={classNames(styles['account__background-runner'])}
            style={{
              backgroundImage: `url(${runnerBgImg})`,
            }}
          ></div>
          <div
            className={classNames(
              styles['account__background-circle'],
              'blur-circle-big'
            )}
          ></div>
        </div>
        <div className={classNames(styles['account__wrapper'])}>
          <AccountNavBar
            className={classNames(
              styles['account__navbar'],
              styles['account__side']
            )}
          />
          <div className={classNames(styles['account__body'])}>
            <Outlet />
          </div>
          {isDesktopOrLaptop && (
            <div className={classNames(styles['account__side'])} />
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountView
