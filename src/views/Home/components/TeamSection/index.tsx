'use client'

import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import MembersSlider from '@/components/shared/Members/MembersSlider'

import { useClientSideValue } from '@/hooks/useClientSideValue'
import {teamMembers} from './data'
import styles from './style.module.scss'

const TeamSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isTabletOrMobileValue = useMediaQuery('not all and (min-width: 768px)')

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
          <MembersSlider members={teamMembers} className={classNames(styles['team__slider'])} />
        </div>
      </div>
    </section>
  )
}

export default TeamSection
