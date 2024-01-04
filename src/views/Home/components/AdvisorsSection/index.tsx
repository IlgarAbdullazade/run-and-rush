'use client'

import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import MembersSlider from '@/components/shared/Members/MembersSlider'

import { useClientSideValue } from '@/hooks/useClientSideValue'

import gridBgImg from '@/assets/images/grid-bg.png'
import merTickerImg from '@/assets/images/mer-ticker.png'

import { advisors } from './data'

import styles from './style.module.scss'

const AdvisorsSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isTabletOrMobileValue = useMediaQuery('not all and (min-width: 768px)')

  return (
    <section className={classNames(styles['advisors'], className)}>
      <div className={classNames(styles['advisors__container'])}>
        <div className={classNames(styles['advisors__background'])}>
          <div
            className={classNames(styles['advisors__background-grid'])}
            style={{
              backgroundImage: `url(${gridBgImg.src})`,
            }}
          ></div>
          <div
            className={classNames(
              styles['advisors__background-circle'],
              'blur-circle-small'
            )}
          ></div>
        </div>
        <div className={classNames(styles['advisors__wrapper'])}>
          <h1 className={classNames(styles['advisors__title'])}>
            The <strong className="text-gradient">Advisors</strong>
          </h1>
          <MembersSlider skewClass='-skew-x-8' members={advisors} className={classNames(styles['advisors__slider'])} />
        </div>
      </div>
      <div className={classNames(styles['advisors__ticker'])}>
        <div
          className={classNames(styles['advisors__ticker-image'])}
          style={{
            backgroundImage: `url(${merTickerImg.src})`,
          }}
        ></div>
      </div>
    </section>
  )
}

export default AdvisorsSection
