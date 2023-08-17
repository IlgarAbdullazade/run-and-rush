import classNames from 'classnames'
import Link from 'next/link'

import Logo from '@/components/shared/Logo'
import ActiveLink from '@/components/UI/ActiveLink'
import AppButton from '@/components/UI/AppButton'

import styles from './style.module.scss'

const Footer = () => {
  return (
    <footer className={classNames(styles['footer'])}>
      <div className={classNames(styles['footer__container'])}>
        <div className={classNames(styles['footer__wrapper'])}>
          <div className={classNames(styles['footer__body'])}>
            <Link href="/" className={classNames(styles['footer__logo'])}>
              <Logo />
            </Link>
            <nav
              className={classNames(
                styles['footer__menu'],
                styles['footer-menu']
              )}
            >
              <ul className={classNames(styles['footer-menu__list'])}>
                <li className={classNames(styles['footer-menu__item'])}>
                  <ActiveLink
                    activeClassName="text-gradient"
                    className={classNames(styles['footer-menu__link'])}
                    href="/how-to-play"
                  >
                    How to play
                  </ActiveLink>
                </li>
                <li className={classNames(styles['footer-menu__item'])}>
                  <ActiveLink
                    activeClassName="text-gradient"
                    className={classNames(styles['footer-menu__link'])}
                    href="/whitepaper"
                  >
                    Whitepaper
                  </ActiveLink>
                </li>
                <li className={classNames(styles['footer-menu__item'])}>
                  <ActiveLink
                    activeClassName="text-gradient"
                    className={classNames(styles['footer-menu__link'])}
                    href="/linktree"
                  >
                    Linktree
                  </ActiveLink>
                </li>
              </ul>
            </nav>
            <div
              className={classNames(
                styles['footer__apps'],
                styles['footer-apps']
              )}
            >
              <AppButton
                className={classNames(styles['footer-apps__button'])}
                store="android"
              />
              <AppButton
                className={classNames(styles['footer-apps__button'])}
                store="ios"
              />
            </div>
          </div>
          <div className={classNames(styles['footer__copyright'])}>
            © 2023 Run & Rush
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
