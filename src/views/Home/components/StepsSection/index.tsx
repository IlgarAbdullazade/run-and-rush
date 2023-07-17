import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import burnerIcon from '@/assets/images/home/steps/burner.svg'
import distanceIcon from '@/assets/images/home/steps/distance.svg'
import runnerWithShoesImg from '@/assets/images/home/steps/runner-with-shoes.png'

import styles from './style.module.scss'

const StepsSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className={classNames(styles['steps'], className)}>
      <div className={classNames(styles['steps__container'])}>
        <div className={classNames(styles['steps__wrapper'])}>
          <div
            className={classNames(
              styles['steps__context'],
              styles['steps-context']
            )}
          >
            <h1 className={classNames(styles['steps-context__title'])}>
              <strong className="text-gradient">Join today</strong> and make
              your
              <strong className="text-gradient"> steps count!</strong>
            </h1>
            <div className={classNames(styles['steps-context__body'])}>
              <div
                className={classNames(
                  styles['steps-context__counter'],
                  styles['steps-counter']
                )}
              >
                <img
                  src={distanceIcon}
                  alt="Distance Icon"
                  className={classNames(styles['steps-counter__icon'])}
                ></img>
                <div className={classNames(styles['steps-counter__info'])}>
                  <h3
                    className={classNames(
                      styles['steps-counter__title'],
                      'text-gradient'
                    )}
                  >
                    198,090,598,986.71
                  </h3>
                  <div className={classNames(styles['steps-counter__caption'])}>
                    Distance Run (M)
                  </div>
                </div>
              </div>
              <div
                className={classNames(
                  styles['steps-context__counter'],
                  styles['steps-counter']
                )}
              >
                <div className={classNames(styles['steps-counter__leading'])}>
                  <img
                    src={burnerIcon}
                    alt="Burner Icon"
                    className={classNames(styles['steps-counter__icon'])}
                  ></img>
                </div>
                <div className={classNames(styles['steps-counter__info'])}>
                  <h3
                    className={classNames(
                      styles['steps-counter__title'],
                      'text-gradient'
                    )}
                  >
                    198,090,598,986.71
                  </h3>
                  <div className={classNames(styles['steps-counter__caption'])}>
                    Calories Burned (kCal)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={classNames(styles['steps__decoration'])}>
            <img
              className={classNames(styles['steps__decoration-image'])}
              src={runnerWithShoesImg}
              alt="Run&Rush App"
            />
            <div
              className={classNames(
                styles['steps__decoration-circle'],
                'blur-circle-small'
              )}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsSection
