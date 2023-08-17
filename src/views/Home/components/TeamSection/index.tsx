'use client'

import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { MembersGrid } from '@/components/shared/Members'
import MembersSlider from '@/components/shared/Members/MembersSlider'

import { useClientSideValue } from '@/hooks/useClientSideValue'

import styles from './style.module.scss'

const TeamSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isTabletOrMobileValue = useMediaQuery('not all and (min-width: 768px)')
  const isTabletOrMobile = useClientSideValue(isTabletOrMobileValue, false)

  return (
    <section className={classNames(styles['team'], className)}>
      <div className={classNames(styles['team__container'])}>
        <div className={classNames(styles['team__background'])}>
          <div
            className={classNames(
              styles['team__background-circle'],
              'blur-circle-small'
            )}
          ></div>
        </div>
        <div className={classNames(styles['team__wrapper'])}>
          <h1 className={classNames(styles['team__title'])}>
            The <strong className="text-gradient">Team</strong>
          </h1>
          {isTabletOrMobile ? (
            <MembersSlider className={classNames(styles['team__slider'])} />
          ) : (
            <MembersGrid className={classNames(styles['team__members'])} />
          )}
        </div>
      </div>
    </section>
  )
}

export default TeamSection
