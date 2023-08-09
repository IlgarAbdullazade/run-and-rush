import classNames from 'classnames'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { NavLink, useLocation } from 'react-router-dom'

import AppButton from '@/components/UI/AppButton'
import Logo from '@/components/shared/Logo'
import Socials from '@/components/shared/Socials'

import { useAppSelector } from '@/store/hooks'

import HeaderProfile from './components/HeaderProfile'
import styles from './style.module.scss'

const Header = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const isTabletOrMobile = useMediaQuery({
    query: 'not all and (min-width: 1024px)',
  })
  const { pathname } = useLocation()

  const handleMenuClick = () => {
    setMenuIsOpen(!menuIsOpen)
    menuIsOpen
      ? document.body.classList.remove('overflow-hidden')
      : document.body.classList.add('overflow-hidden')
  }

  useEffect(() => {
    setMenuIsOpen(false)
  }, [pathname])

  return (
    <header className={classNames(styles['header'])}>
      <div className={classNames(styles['header__container'])}>
        <div className={classNames(styles['header__wrapper'])}>
          <div className={classNames(styles['header__body'])}>
            <div className={classNames(styles['header__mobile'])}>
              <button
                onClick={handleMenuClick}
                type="button"
                className={classNames(styles['icon-menu'])}
              >
                <div className={classNames(styles['icon-menu__wrapper'])}>
                  <div className={classNames(styles['icon-menu__circle'])}>
                    <div
                      className={classNames(
                        styles['icon-menu__icon'],
                        menuIsOpen ? styles['menu-open'] : ''
                      )}
                    >
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
            <nav
              className={classNames(
                styles['header__menu'],
                styles['header-menu'],
                menuIsOpen ? styles['menu-open'] : ''
              )}
            >
              <ul className={classNames(styles['header-menu__list'])}>
                <li className={classNames(styles['header-menu__item'])}>
                  <NavLink
                    className={({ isActive }) =>
                      classNames(
                        styles['header-menu__link'],
                        isTabletOrMobile ? 'text-gradient' : '',
                        isActive ? 'text-gradient' : ''
                      )
                    }
                    to="how-to-play"
                  >
                    How to play
                  </NavLink>
                </li>
                <li className={classNames(styles['header-menu__item'])}>
                  <NavLink
                    className={({ isActive }) =>
                      classNames(
                        styles['header-menu__link'],
                        isTabletOrMobile ? 'text-gradient' : '',
                        isActive ? 'text-gradient' : ''
                      )
                    }
                    to="whitepaper"
                  >
                    Whitepaper
                  </NavLink>
                </li>
                <li className={classNames(styles['header-menu__item'])}>
                  <NavLink
                    className={({ isActive }) =>
                      classNames(
                        styles['header-menu__link'],
                        isTabletOrMobile ? 'text-gradient' : '',
                        isActive ? 'text-gradient' : ''
                      )
                    }
                    to="linktree"
                  >
                    Linktree
                  </NavLink>
                </li>
              </ul>
              {isTabletOrMobile && (
                <div
                  className={classNames(
                    styles['header-menu__apps'],
                    styles['header-menu-apps']
                  )}
                >
                  <div
                    className={classNames(styles['header-menu-apps__wrapper'])}
                  >
                    <h3
                      className={classNames(
                        styles['header-menu-apps__title'],
                        'text-gradient'
                      )}
                    >
                      Download the app
                    </h3>
                    <AppButton
                      href=""
                      className={classNames(styles['header-menu-apps__item'])}
                      store="android"
                    />
                    <AppButton
                      href=""
                      className={classNames(styles['header-menu-apps__item'])}
                      store="ios"
                    />
                  </div>
                </div>
              )}
              {isTabletOrMobile && (
                <Socials
                  className={classNames(styles['header-menu__socials'])}
                />
              )}
            </nav>
            <NavLink to={''} className={classNames(styles['header__logo'])}>
              <Logo />
            </NavLink>
            <div className={classNames(styles['header__rightside'])}>
              {!isAuthenticated && (
                <div
                  className={classNames(
                    styles['header__apps'],
                    styles['header-apps']
                  )}
                >
                  <AppButton
                    href=""
                    className={classNames(styles['header-apps__button'])}
                    store="android"
                  />
                  <AppButton
                    href=""
                    className={classNames(styles['header-apps__button'])}
                    store="ios"
                  />
                </div>
              )}
              <HeaderProfile
                className={classNames(styles['header__profile'])}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
