'use client'

import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import Logo from '@/components/shared/Logo'
import Socials from '@/components/shared/Socials'
import ActiveLink from '@/components/UI/ActiveLink'
import AppButton from '@/components/UI/AppButton'

import { useClientSideValue } from '@/hooks/useClientSideValue'

import { useAppSelector } from '@/store/hooks'

import HeaderProfile from './components/HeaderProfile'
import styles from './style.module.scss'

const Header = () => {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated)
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const isTabletOrMobileValue = useMediaQuery('not all and (min-width: 1024px)')
  const isTabletOrMobile = useClientSideValue(isTabletOrMobileValue, false)
  const pathname = usePathname()

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
                  <ActiveLink
                    activeClassName="text-gradient"
                    className={classNames(
                      styles['header-menu__link'],
                      isTabletOrMobile ? 'text-gradient' : ''
                    )}
                    href="/how-to-play"
                  >
                    How to play
                  </ActiveLink>
                </li>
                <li className={classNames(styles['header-menu__item'])}>
                  <ActiveLink
                    activeClassName="text-gradient"
                    className={classNames(
                      styles['header-menu__link'],
                      isTabletOrMobile ? 'text-gradient' : ''
                    )}
                    href="/whitepaper"
                  >
                    Whitepaper
                  </ActiveLink>
                </li>
                <li className={classNames(styles['header-menu__item'])}>
                  <a
                    className={classNames(styles['header-menu__link'])}
                    href="https://linktr.ee/runrush"
                    target="_blank"
                  >
                    Linktree
                  </a>
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
                      className={classNames(styles['header-menu-apps__item'])}
                      store="android"
                    />
                    <AppButton
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
            <Link href="/" className={classNames(styles['header__logo'])}>
              <Logo />
            </Link>
            <div className={classNames(styles['header__rightside'])}>
              {!isAuthenticated && (
                <div
                  className={classNames(
                    styles['header__apps'],
                    styles['header-apps']
                  )}
                >
                  <AppButton
                    className={classNames(styles['header-apps__button'])}
                    store="android"
                  />
                  <AppButton
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
