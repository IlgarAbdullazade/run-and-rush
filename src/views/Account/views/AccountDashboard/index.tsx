'use client'

import classNames from 'classnames'
import { abbreviateNumber } from 'js-abbreviation-number'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { HTMLAttributes, ReactNode, useEffect } from 'react'

import { ISneakerBase } from '@/shared/types/sneakers.types'

import coin from '@/assets/icons/coin.svg'

import { Helpers } from '@/utils/helpers'

import { useAppSelector } from '@/store/hooks'

import ProgressBar from './components/ProgressBar'
import { useTotalCoins } from './hooks/useTotalCoins'
import { useWalking } from './hooks/useWalking'
import styles from './style.module.scss'

const AccountDashboard: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const router = useRouter()
  const { data: walkingProfile } = useWalking()
  const user = useAppSelector((state) => state.auth.user)
  const account = useAppSelector((state) => state.account.account)
  const coins = useTotalCoins(walkingProfile?.sneakers)

  const energyRatio =
    Helpers.roundNumber(walkingProfile?.energy) /
    Helpers.roundNumber(walkingProfile?.energy_max)

  const energyRatioText = `${Helpers.roundNumber(walkingProfile?.energy)} /
    ${Helpers.roundNumber(walkingProfile?.energy_max)}`

  const totalCoinsRatio =
    Helpers.roundNumber(walkingProfile?.distance) /
    Helpers.roundNumber(walkingProfile?.distance_max)

  const totalCoinsText = `${Helpers.roundNumber(
    (coins / (walkingProfile?.distance_max ?? 2000)) *
      (walkingProfile?.distance ?? 2000)
  )} /
    ${Helpers.roundNumber(coins)}`

  const goToInventoryPage = () => {
    router.push('account/inventory')
  }

  const sneakerActionItem = (sneaker: ISneakerBase | undefined): ReactNode => {
    return sneaker ? (
      <div
        key={sneaker.id}
        className={classNames(styles['dashboard-actions__item'])}
      >
        <Image
          src={sneaker.image_url!}
          alt={sneaker.title!}
          width={46}
          height={46}
          className={classNames(styles['dashboard-actions__item--image'])}
        />
      </div>
    ) : (
      <button
        type="button"
        onClick={goToInventoryPage}
        className={classNames(
          styles['dashboard-actions__item'],
          styles['dashboard-actions__item--add']
        )}
      >
        <i
          className={classNames(
            styles['dashboard-actions__item--icon'],
            'icon-add'
          )}
        ></i>
      </button>
    )
  }

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
            Hello, {user?.first_name.trim() ? user?.first_name : user?.email}
          </h2>
          <div className={classNames(styles['dashboard-user__balance'])}>
            <Image
              className={classNames(styles['dashboard-user__balance-coin'])}
              src={coin}
              alt="Run&Rush Coin"
            />
            <span>{account?.balance}</span>
          </div>
        </div>
        {walkingProfile?.sneakers[0] ? (
          <div
            className={classNames(
              styles['dashboard__sneaker'],
              styles['dashboard-sneaker']
            )}
          >
            <div className={classNames(styles['dashboard-sneaker__wrapper'])}>
              <div className={classNames(styles['dashboard-sneaker__info'])}>
                <h2 className={classNames(styles['dashboard-sneaker__title'])}>
                  {walkingProfile?.sneakers[0].title}
                </h2>
                <span className={classNames(styles['dashboard-sneaker__id'])}>
                  #{Helpers.splitUUID(walkingProfile?.sneakers[0].id ?? '')}
                </span>
              </div>
              <div className={classNames(styles['dashboard-sneaker__rect'])}>
                <Image
                  src={walkingProfile?.sneakers[0].image_url!}
                  alt={walkingProfile?.sneakers[0].title!}
                  width={96}
                  height={58}
                  className={classNames(styles['dashboard-sneaker__image'])}
                />
              </div>
            </div>
          </div>
        ) : (
          <button
            type="button"
            onClick={goToInventoryPage}
            className={classNames(
              styles['dashboard__sneaker'],
              styles['dashboard-sneaker-add']
            )}
          >
            <i
              className={classNames(
                styles['dashboard-actions__item--icon'],
                'icon-add'
              )}
            ></i>
          </button>
        )}
        <div
          className={classNames(
            styles['dashboard__actions'],
            styles['dashboard-actions']
          )}
        >
          {walkingProfile?.sneakers
            .slice(1, 5)
            .map((sneaker) => sneakerActionItem(sneaker))}
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
            text={totalCoinsText}
            progress={totalCoinsRatio}
          />
          <ProgressBar
            icon="icon-power"
            text={energyRatioText}
            progress={energyRatio}
            className={classNames(styles['dashboard-progress__item'])}
          />
        </div>
      </div>
    </section>
  )
}

export default AccountDashboard
