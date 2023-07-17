import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'

type HTPSlideFeaturePropType = HTMLAttributes<HTMLDivElement> & {
  title: string
  caption: string
}

const HTPSlideFeature: React.FC<HTPSlideFeaturePropType> = ({
  className,
  title,
  caption,
}) => {
  return (
    <div className={classNames(styles['htp-context-feature'], className)}>
      <div className={classNames(styles['htp-context-feature__wrapper'])}>
        <h3 className={classNames(styles['htp-context-feature__title'])}>
          {title}
        </h3>
        <div className={classNames(styles['htp-context-feature__caption'])}>
          {caption}
        </div>
      </div>
    </div>
  )
}

export default HTPSlideFeature
