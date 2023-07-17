import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'
import HTPSlideFeature from '../HTPSlideFeature'
import { IHTPStep } from '../../types'
import { useMediaQuery } from 'react-responsive'

type HTPSlidePropType = HTMLAttributes<HTMLDivElement> & {
  slideData: IHTPStep
  index: number
  bigTitle?: boolean
}

const HTPSlide: React.FC<HTPSlidePropType> = ({
  className,
  index,
  slideData,
  bigTitle,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: 'not all and (min-width: 1024px)',
  })

  return (
    <section className={classNames(styles['htp-slide'], className)}>
      <div className={classNames(styles['htp-slide__wrapper'])}>
        <div
          className={classNames(
            styles['htp-slide__heading'],
            styles['htp-slide__side']
          )}
        >
          <div className={classNames(styles['htp-slide__caption'])}>
            Step {index}
          </div>
          <h2
            className={classNames(
              styles['htp-slide__title'],
              'text-gradient',
              bigTitle && !isTabletOrMobile ? 'text-8xl leading-tight' : ''
            )}
          >
            {slideData.title}
          </h2>
        </div>
        <div className={classNames(styles['htp-slide__center'])}>
          <div className={classNames(styles['htp-slide__phone'])}>
            {slideData.decorationImage && (
              <img
                src={slideData.decorationImage}
                alt="Decoration Image"
                className={classNames(styles['htp-slide__phone--decoration'])}
              />
            )}
            <img
              src={
                isTabletOrMobile
                  ? slideData.image.phone
                  : slideData.image.desktop
              }
              alt={`Step ${index}`}
              className={classNames(styles['htp-slide__phone-img'])}
            />
          </div>
        </div>
        <div
          className={classNames(
            styles['htp-slide__context'],
            styles['htp-slide__side'],
            styles['htp-slide-context']
          )}
        >
          <div className={classNames(styles['htp-slide-context__wrapper'])}>
            {slideData.features.map((feature, index) => (
              <HTPSlideFeature
                key={index}
                className={classNames(styles['htp-slide-context__feature'])}
                title={feature.title}
                caption={feature.caption}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default HTPSlide
