import classNames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import { HTMLAttributes } from 'react'

import AppButton from '@/components/UI/AppButton'
import Button from '@/components/UI/Button'

import appsImg from '@/assets/images/home/hello/apps.png'
import merTickerImg from '@/assets/images/mer-ticker.png'
import runnerBgImg from '@/assets/images/runner-bg.png'

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
              backgroundImage: `url(${runnerBgImg.src})`,
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
              <br /> Let&apos;s{' '}
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
                href="/how-to-play"
                className={classNames(styles['hello-actions__item'])}
              >
                <Button icon="icon-play" isOutline={true}>
                  How to play
                </Button>
              </Link>
            </div>
          </div>
          <div className={classNames(styles['hello__decoration'])}>
            <Image
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
            backgroundImage: `url(${merTickerImg.src})`,
          }}
        ></div>
      </div>
    </section>
  )
}
export default HelloSection
