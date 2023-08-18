import classNames from 'classnames'
import { useRouter } from 'next-nprogress-bar'
import { usePathname } from 'next/navigation'
import React, { HTMLAttributes, useEffect, useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import Modal from 'react-responsive-modal'

import Auth from '@/components/shared/Auth'

import { logout } from '@/store/auth/authActions'
import { useAppDispatch, useAppSelector } from '@/store/hooks'

import styles from './style.module.scss'

const HeaderProfile: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const user = useAppSelector((state) => state.auth.user)

  const dispatch = useAppDispatch()
  const router = useRouter()
  const pathname = usePathname()
  const [showModal, setShowModal] = useState(false)

  const handleShow = () => {
    setShowModal(true)
  }

  const handleHide = () => {
    setShowModal(false)
  }

  const handleLogout = () => {
    router.replace('/')
    dispatch(logout())
  }

  useEffect(() => {
    handleHide()
  }, [pathname])

  return (
    <>
      <div className={classNames(styles['header-profile'], className)}>
        <div className={classNames(styles['header-profile__wrapper'])}>
          <div
            onClick={
              isAuthenticated ? () => router.push('/account') : handleShow
            }
            className={classNames(
              styles['header-profile__leading'],
              styles['header-profile-leading']
            )}
          >
            <div
              className={classNames(styles['header-profile-leading__wrapper'])}
            >
              <div
                className={classNames(styles['header-profile-leading__circle'])}
              >
                <i
                  className={classNames(
                    styles['header-profile-leading__icon'],
                    'icon-avatar'
                  )}
                ></i>
              </div>
            </div>
          </div>
          {isAuthenticated && (
            <div className={classNames(styles['header-profile__body'])}>
              <div className={classNames(styles['header-profile__name'])}>
                {user?.email}
              </div>
              <button
                type="button"
                onClick={handleLogout}
                className={classNames(styles['header-profile__logout'])}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      <Modal closeIcon={<IoCloseSharp />} open={showModal} onClose={handleHide}>
        <Auth setClose={handleHide} />
      </Modal>
    </>
  )
}

export default HeaderProfile
