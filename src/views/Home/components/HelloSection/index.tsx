import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import AppButton from '@/components/UI/AppButton'
import runnerBgImg from '@/assets/images/runner-bg.png'
import merTickerImg from '@/assets/images/mer-ticker.png'
import appsImg from '@/assets/images/home/hello/apps.png'

import styles from './style.module.scss'
import Button from '@/components/UI/Button'
import { Link } from 'react-router-dom'

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
              <strong className={classNames('text-gradient')}>Run&Rush </strong>
              App
              <br /> Let's{' '}
              <strong className={classNames('text-gradient')}>
                Move To Earn
              </strong>
            </h1>
            <div className={classNames(styles['hello-context__caption'])}>
              Experience the difference and ensuring your steps are truly
              valued!
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
                  styles['hello-actions__item--app']
                )}
                store="android"
              />
              <AppButton
                className={classNames(
                  styles['hello-actions__item'],
                  styles['hello-actions__item--app']
                )}
                store="ios"
              />
              <Link
                to="how-to-play"
                className={classNames(styles['hello-actions__item'])}
              >
                <Button icon="icon-play" isOutline={true}>
                  How to play
                </Button>
              </Link>
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
