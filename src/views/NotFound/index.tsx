import classNames from 'classnames'
import Link from 'next/link'

import Button from '@/components/UI/Button'

import runnerBgImg from '@/assets/images/runner-bg.png'

import styles from './style.module.scss'

const NotFoundView = () => {
  return (
    <section className={classNames(styles['notfound'])}>
      <div className={classNames(styles['notfound__container'])}>
        <div className={classNames(styles['notfound__background'])}>
          <div
            className={classNames(styles['notfound__background-runner'])}
            style={{
              backgroundImage: `url(${runnerBgImg.src})`,
            }}
          ></div>
          <div
            className={classNames(
              styles['notfound__background-circle'],
              'blur-circle-big'
            )}
          ></div>
        </div>
        <div className={classNames(styles['notfound__wrapper'])}>
          <div
            className={classNames(
              styles['notfound__context'],
              styles['notfound-context']
            )}
          >
            <h3
              className={classNames(
                styles['notfound-context__title'],
                'text-gradient'
              )}
            >
              Page not found
            </h3>
            <div className={classNames(styles['notfound-context__caption'])}>
              The page you looking for is could not be found. Click the button
              below to go back to home page
            </div>
            <Link
              href="/"
              className={classNames(styles['notfound-context__button'])}
            >
              <Button isOutline={true} className="w-full">
                Go home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NotFoundView
