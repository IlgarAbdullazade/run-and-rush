import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import AppButton from '@/components/UI/AppButton'
import runnerBgImg from '@/assets/images/runner-bg.png'
import merTickerImg from '@/assets/images/mer-ticker.png'
import appsImg from '@/assets/images/home/hello/apps.png'
import OutlineButton from '@/components/UI/OutlineButton'

import styles from './style.module.scss'

const HelloSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className={classNames(styles['hello'], className)}>
      <div className={classNames(styles['hello__container'])}>
        <div className={classNames(styles['hello__background'])}>
          <div
            className={classNames(styles['hello__background-runner'])}
            style={{
              backgroundImage: `url(${runnerBgImg})`,
            }}
          ></div>
          <div
            className={classNames(
              styles['hello__background-circle'],
              'blur-circle-big'
            )}
          ></div>
        </div>
        <div className={classNames(styles['hello__wrapper'])}>
          <div
            className={classNames(
              styles['hello__context'],
              styles['hello-context']
            )}
          >
            <h1 className={classNames(styles['hello-context__title'])}>
              <strong className={classNames('text-gradient')}>Run&Rush</strong>{' '}
              App
              <br /> Let's{' '}
              <strong className={classNames('text-gradient')}>
                Move To Earn
              </strong>
            </h1>
            <div className={classNames(styles['hello-context__caption'])}>
              Join today and make your steps count!
            </div>
            <div
              className={classNames(
                styles['hello-context__actions'],
                styles['hello-actions']
              )}
            >
              <AppButton
                className={classNames(
                  styles['hello-actions__item'],
                  'rounded-full',
                  'px-8'
                )}
                store="android"
              />
              <AppButton
                className={classNames(
                  styles['hello-actions__item'],
                  'rounded-full',
                  'px-8'
                )}
                store="ios"
              />
              <OutlineButton
                to={''}
                className={classNames(styles['hello-actions__item'])}
                icon="icon-play"
              >
                How to play
              </OutlineButton>
            </div>
          </div>
          <div className={classNames(styles['hello__decoration'])}>
            <img
              className={classNames(styles['hello__decoration-image'])}
              src={appsImg}
              alt="Run&Rush App"
            />
          </div>
        </div>
      </div>
      <div className={classNames(styles['hello__ticker'])}>
        <div
          className={classNames(styles['hello__ticker-image'])}
          style={{
            backgroundImage: `url(${merTickerImg})`,
          }}
        ></div>
      </div>
    </section>
  )
}
export default HelloSection
