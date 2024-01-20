'use client'

import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { useClientSideValue } from '@/hooks/useClientSideValue'

import RoadmapItem from './components/RoadmapItem'
import RoadmapSlider from './components/RoadmapSlider'
import { roadmapSections } from './data'
import styles from './style.module.scss'

const RoadmapSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isTabletOrMobileValue = useMediaQuery('not all and (min-width: 1024px)')
  const isTabletOrMobile = useClientSideValue(isTabletOrMobileValue, false)

  return (
    <section className={classNames(styles['roadmap'], className)}>
      <div className={classNames(styles['roadmap__container'])}>
        <div className={classNames(styles['roadmap__background'])}>
          <div
            className={classNames(
              styles['roadmap__background-circle'],
              'blur-circle-small'
            )}
          ></div>
        </div>
        <div className={classNames(styles['roadmap__wrapper'])}>
          <h1 className={classNames(styles['roadmap__title'], 'text-gradient')}>
            Roadmap
          </h1>
          {isTabletOrMobile ? (
            <RoadmapSlider roadmaps={roadmapSections} className={classNames(styles['roadmap__slider'])} />
          ) : (
            <div className={classNames(styles['roadmap__grid'])}>
              <div className={classNames(styles['roadmap__item--empty'])}></div>
              {roadmapSections.map((roadmap) => (
                <RoadmapItem
                  key={roadmap.title}
                  roadmap={roadmap}
                  className={classNames(styles['roadmap__item'], `${roadmap.showLine ? styles['roadmap__item--line'] : ""}`)}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection
