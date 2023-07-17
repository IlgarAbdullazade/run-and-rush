import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import referralImg from '@/assets/images/home/referral/referral-decoration.png'

import styles from './style.module.scss'

const UniquenessSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className={classNames(styles['team'], className)}>
      <div className={classNames(styles['referral__container'])}>
        <div className={classNames(styles['referral__background'])}>
          <div
            className={classNames(
              styles['referral__background-circle'],
              'blur-circle-middle'
            )}
          ></div>
        </div>
        <div className={classNames(styles['referral__wrapper'])}>
          <div className={classNames(styles['referral__decoration'])}>
            <img
              src={referralImg}
              alt="Referral"
              className={classNames(styles['referral__decoration-image'])}
            />
          </div>
          <div className={classNames(styles['referral__context'])}>
            <h1 className={classNames(styles['referral__title'])}>
              Invite to <strong className="text-gradient">Earn</strong>
            </h1>
            <p className={classNames(styles['referral__text'])}>
              you have a personal code, you give it to a friend, he registers,
              enters your code - buys sneakers and you instantly receive 10% of
              the amount of sneakers he bought
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniquenessSection
