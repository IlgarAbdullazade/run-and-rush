'use client'

import classNames from 'classnames'
import { useMediaQuery } from 'usehooks-ts'

import { useClientSideValue } from '@/hooks/useClientSideValue'

import runnerBgImg from '@/assets/images/runner-bg.png'

import AccountNavBar from './components/AccountNavBar'
import styles from './style.module.scss'

const AccountView = ({ children }: { children: React.ReactNode }) => {
  const isDesktopOrLaptopValue = useMediaQuery('(min-width: 1024px)')
  const isDesktopOrLaptop = useClientSideValue(isDesktopOrLaptopValue, false)

  return (
    <div className={classNames(styles['account'])}>
      <div className={classNames(styles['account__container'])}>
        <div className={classNames(styles['account__background'])}>
          <div
            className={classNames(styles['account__background-runner'])}
            style={{
              backgroundImage: `url(${runnerBgImg.src})`,
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
          <div className={classNames(styles['account__body'])}>{children}</div>
          {isDesktopOrLaptop && (
            <div className={classNames(styles['account__side'])} />
          )}
        </div>
      </div>
    </div>
  )
}

export default AccountView
