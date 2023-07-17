import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import coin from '@/assets/icons/coin.svg'
import sneakersImg from '@/assets/images/shoes/mid-sneakers.png'

import styles from './style.module.scss'
import ProgressBar from './components/ProgressBar'

const AccountDashboard: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className={classNames(styles['dashboard'], className)}>
      <div className={classNames(styles['dashboard__wrapper'])}>
        <div
          className={classNames(
            styles['dashboard__user'],
            styles['dashboard-user']
          )}
        >
          <h2 className={classNames(styles['dashboard-user__name'])}>
            Hello, Andrew
          </h2>
          <div className={classNames(styles['dashboard-user__balance'])}>
            <img
              className={classNames(styles['dashboard-user__balance-coin'])}
              src={coin}
              alt="Run&Rush Coin"
            />
            <span>0.0025</span>
          </div>
        </div>
        <div
          className={classNames(
            styles['dashboard__sneaker'],
            styles['dashboard-sneaker']
          )}
        >
          <div className={classNames(styles['dashboard-sneaker__wrapper'])}>
            <div className={classNames(styles['dashboard-sneaker__info'])}>
              <h2 className={classNames(styles['dashboard-sneaker__title'])}>
                Jogger 2023
              </h2>
              <span className={classNames(styles['dashboard-sneaker__id'])}>
                #145265874
              </span>
            </div>
            <div className={classNames(styles['dashboard-sneaker__rect'])}>
              <img
                src={sneakersImg}
                alt="Jogger"
                className={classNames(styles['dashboard-sneaker__image'])}
              />
            </div>
          </div>
        </div>
        <div
          className={classNames(
            styles['dashboard__actions'],
            styles['dashboard-actions']
          )}
        >
          <button
            type="button"
            className={classNames(styles['dashboard-actions__item'])}
          >
            <i
              className={classNames(
                styles['dashboard-actions__item--icon'],
                'icon-add'
              )}
            ></i>
          </button>
          <button
            type="button"
            className={classNames(styles['dashboard-actions__item'])}
          >
            <i
              className={classNames(
                styles['dashboard-actions__item--icon'],
                'icon-add'
              )}
            ></i>
          </button>
          <button
            type="button"
            className={classNames(styles['dashboard-actions__item'])}
          >
            <i
              className={classNames(
                styles['dashboard-actions__item--icon'],
                'icon-add'
              )}
            ></i>
          </button>
          <button
            type="button"
            className={classNames(styles['dashboard-actions__item'])}
          >
            <i
              className={classNames(
                styles['dashboard-actions__item--icon'],
                'icon-add'
              )}
            ></i>
          </button>
        </div>
        <div
          className={classNames(
            styles['dashboard__progress'],
            styles['dashboard-progress']
          )}
        >
          <ProgressBar
            className={classNames(styles['dashboard-progress__item'])}
            icon="icon-durability"
            text="25.6K/50K"
            progress={25.6 / 50}
          />
          <ProgressBar
            icon="icon-power"
            text="6 / 20"
            progress={6 / 20}
            className={classNames(styles['dashboard-progress__item'])}
          />
        </div>
      </div>
    </section>
  )
}

export default AccountDashboard
