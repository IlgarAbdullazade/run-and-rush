import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import runnerBgImg from '@/assets/images/runner-bg.png'

import styles from './style.module.scss'

const AboutSlide: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <div className={classNames(styles['about-slide'], className)}>
      <div className={classNames(styles['about-slide__wrapper'])}>
        <div className={classNames(styles['about-slide__rect'])}>
          <Image
            src={runnerBgImg}
            alt="Slide"
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
