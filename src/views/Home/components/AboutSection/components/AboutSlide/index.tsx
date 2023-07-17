import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import styles from './style.module.scss'

const AboutSlide: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={classNames(styles['about-slide'], className)}>
      <div className={classNames(styles['about-slide__wrapper'])}>
        <div className={classNames(styles['about-slide__rect'])}>
          <img
            src="https://media.istockphoto.com/id/1324624694/photo/fitness-woman-running-training-for-marathon-on-sunny-coast-trail.jpg?s=612x612&w=0&k=20&c=09StrnZiVdHvfR1G9CeBqcMYxSvFSGFQVuNbOzhBQ-c="
            alt=""
            className={classNames(styles['about-slide__image'])}
          />
        </div>
        <span className={classNames(styles['about-slide__caption'])}>
          Best Strategy Breakdown
        </span>
      </div>
    </div>
  )
}

export default AboutSlide
