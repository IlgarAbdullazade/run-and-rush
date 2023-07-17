import React, { HTMLAttributes, useEffect, useState } from 'react'

import classNames from 'classnames'
import Modal from 'react-responsive-modal'

import Auth from '@/components/shared/Auth'
import { IoCloseSharp } from 'react-icons/io5'

import styles from './style.module.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { logout } from '@/store/slices/authSlice'

const HeaderProfile: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isAuthenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )
  const user = useSelector((state: RootState) => state.auth.user)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [showModal, setShowModal] = useState(false)
  const { pathname } = useLocation()

  const handleShow = () => {
    setShowModal(true)
  }

  const handleHide = () => {
    setShowModal(false)
  }

  const handleLogout = () => {
    navigate('/')
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
            onClick={isAuthenticated ? () => navigate('/account') : handleShow}
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
                oooof_fuck@yahoo.com
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
        <Auth />
      </Modal>
    </>
  )
}

export default HeaderProfile
