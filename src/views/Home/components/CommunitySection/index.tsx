import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import Socials from '@/components/shared/Socials'
import runnersBgImg from '@/assets/images/home/community/runners-bg.png'

import styles from './style.module.scss'

const CommunitySection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className={classNames(styles['community'], className)}>
      <div className={classNames(styles['community__container'])}>
        <div className={classNames(styles['community__background'])}>
          <div
            className={classNames(
              styles['community__background-circle'],
              'blur-circle-middle'
            )}
          ></div>
        </div>
        <div className={classNames(styles['community__wrapper'])}>
          <div className={classNames(styles['community__context'])}>
            <h1 className={classNames(styles['community__title'])}>
              Join <strong className="text-gradient">Our Community</strong>
            </h1>
            <div className={classNames(styles['community__text'])}>
              Connect with community to update the newest thing about the market
              and our business.
            </div>
            <Socials className={classNames(styles['community__socials'])} />
          </div>
          <div className={classNames(styles['community__decoration'])}>
            <img
              src={runnersBgImg}
              alt="Runners"
              className={classNames(styles['community__decoration-image'])}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default CommunitySection
