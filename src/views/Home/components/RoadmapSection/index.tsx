import { HTMLAttributes } from 'react'

import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

import styles from './style.module.scss'
import RoadmapItem from './components/RoadmapItem'
import RoadmapSlider from './components/RoadmapSlider'

const RoadmapSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: 'not all and (min-width: 1024px)',
  })

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
            <RoadmapSlider className={classNames(styles['roadmap__slider'])} />
          ) : (
            <div className={classNames(styles['roadmap__grid'])}>
              <div className={classNames(styles['roadmap__item--empty'])}></div>
              <RoadmapItem className={classNames(styles['roadmap__item'])} />
              <RoadmapItem className={classNames(styles['roadmap__item'])} />
              <RoadmapItem className={classNames(styles['roadmap__item'])} />
              <RoadmapItem className={classNames(styles['roadmap__item'])} />
              <RoadmapItem className={classNames(styles['roadmap__item'])} />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default RoadmapSection
