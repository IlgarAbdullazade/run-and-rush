import classNames from 'classnames'
import { NavLink } from 'react-router-dom'

import Logo from '@/components/shared/Logo'
import AppButton from '@/components/UI/AppButton'

import styles from './style.module.scss'

const Footer = () => {
  return (
    <footer className={classNames(styles['footer'])}>
      <div className={classNames(styles['footer__container'])}>
        <div className={classNames(styles['footer__wrapper'])}>
          <div className={classNames(styles['footer__body'])}>
            <NavLink to={''} className={classNames(styles['footer__logo'])}>
              <Logo />
            </NavLink>
            <nav
              className={classNames(
                styles['footer__menu'],
                styles['footer-menu']
              )}
            >
              <ul className={classNames(styles['footer-menu__list'])}>
                <li className={classNames(styles['footer-menu__item'])}>
                  <NavLink
                    className={({ isActive }) =>
                      classNames(
                        styles['footer-menu__link'],
                        isActive ? 'text-gradient' : ''
                      )
                    }
                    to="how-to-play"
                  >
                    How to play
                  </NavLink>
                </li>
                <li className={classNames(styles['footer-menu__item'])}>
                  <NavLink
                    className={({ isActive }) =>
                      classNames(
                        styles['footer-menu__link'],
                        isActive ? 'text-gradient' : ''
                      )
                    }
                    to="whitepaper"
                  >
                    Whitepaper
                  </NavLink>
                </li>
                <li className={classNames(styles['footer-menu__item'])}>
                  <NavLink
                    className={({ isActive }) =>
                      classNames(
                        styles['footer-menu__link'],
                        isActive ? 'text-gradient' : ''
                      )
                    }
                    to="linktree"
                  >
                    Linktree
                  </NavLink>
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
