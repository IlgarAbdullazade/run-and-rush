import classNames from 'classnames'

import runnerBgImg from '@/assets/images/runner-bg.png'

import HTPSlider from './components/HTPSlider'
import styles from './style.module.scss'

const HowToPlayView = () => {
  return (
    <section className={classNames(styles['htp'])}>
      <div className={classNames(styles['htp__container'])}>
        <div className={classNames(styles['htp__background'])}>
          <div
            className={classNames(styles['htp__background-runner'])}
            style={{
              backgroundImage: `url(${runnerBgImg.src})`,
            }}
          ></div>
          <div
            className={classNames(
              styles['htp__background-circle'],
              'blur-circle-big'
            )}
          ></div>
        </div>
        <div className={classNames(styles['htp__wrapper'])}>
          <HTPSlider className={classNames(styles['htp__slider'])} />
        </div>
      </div>
    </section>
  )
}

export default HowToPlayView
