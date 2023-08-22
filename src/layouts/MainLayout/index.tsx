'use client'

import classNames from 'classnames'
import Cookies from 'js-cookie'
import { useCallback, useEffect, useState } from 'react'

import Preloader from '@/components/shared/Preloader'

import mainBg from '@/assets/images/main-bg.jpg'

import { getUserAccount } from '@/store/account/accountActions'
import { getCurrentUser, logout } from '@/store/auth/authActions'
import { useAppDispatch } from '@/store/hooks'

import Header from '../components/Header'

import styles from './style.module.scss'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const token = Cookies.get('accessToken')
  const dispatch = useAppDispatch()

  const getUserData = useCallback(async () => {
    if (token) {
      try {
        await Promise.all([
          dispatch(getCurrentUser()),
          dispatch(getUserAccount()),
        ])
      } catch (error) {
        dispatch(logout())
      } finally {
        setLoading(false)
      }
    } else {
      setLoading(false)
    }
  }, [token, dispatch])

  useEffect(() => {
    getUserData()
  }, [token, getUserData])

  return (
    <>
      <Preloader className={loading ? 'visible' : 'invisible opacity-0'} />
      <div
        className={classNames(styles['page'])}
        style={{
          backgroundImage: `url(${mainBg.src})`,
        }}
      >
        <Header />
        <main className={classNames(styles['page__main'])}>{children}</main>
      </div>
    </>
  )
}

export default MainLayout
