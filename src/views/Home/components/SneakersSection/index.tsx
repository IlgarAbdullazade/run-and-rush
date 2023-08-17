import classNames from 'classnames'
import { HTMLAttributes } from 'react'

import gridBgImg from '@/assets/images/grid-bg.png'

import SneakersCard from './components/SneakersCard'
import styles from './style.module.scss'

const SneakersSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className={classNames(styles['sneakers'], className)}>
      <div className={classNames(styles['sneakers__container'])}>
        <div className={classNames(styles['sneakers__background'])}>
          <div
            className={classNames(styles['sneakers__background-grid'])}
            style={{
              backgroundImage: `url(${gridBgImg.src})`,
            }}
          ></div>
          <div
            className={classNames(
              styles['sneakers__background-circle'],
              'blur-circle-small'
            )}
          ></div>
        </div>
        <div className={classNames(styles['sneakers__wrapper'])}>
          <SneakersCard className={classNames(styles['sneakers__card'])} />
          <div
            className={classNames(
              styles['sneakers__context'],
              styles['sneakers-context']
            )}
          >
            <h1 className={classNames(styles['sneakers-context__title'])}>
              About <strong className="text-gradient">Sneakers</strong>
            </h1>
            <p className={classNames(styles['sneakers-context__text'])}>
              All Sneakers have a limited &quot;ervice life&quot; and do not
              apply any cumulative pressure on the tokenomics. Sneakers have two
              main parameters:
            </p>
            <div
              className={classNames(
                styles['sneakers-context__feature'],
                styles['sneakers-feature']
              )}
            >
              <div
                className={classNames(
                  styles['sneakers-feature__leading'],
                  styles['sneakers-feature__leading--power']
                )}
              >
                <div className={classNames(styles['sneakers-feature__circle'])}>
                  <i
                    className={classNames(
                      styles['sneakers-feature__icon'],
                      'icon-power'
                    )}
                  ></i>
                </div>
                <svg
                  className={classNames(
                    styles['sneakers-feature__stroke'],
                    styles['sneakers-feature__stroke--power']
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  width="92"
                  height="26"
                  viewBox="0 0 92 26"
                  fill="none"
                >
                  <path
                    d="M92 25L53 25L0.5 1"
                    className="stroke-secondary"
                    strokeWidth="2"
                    strokeDasharray="2 2"
                  />
                </svg>
              </div>
              <strong
                className={classNames(
                  styles['sneakers-feature__caption'],
                  'text-gradient'
                )}
              >
                Daily power
              </strong>
              <p className={classNames(styles['sneakers-feature__text'])}>
                How many RARE tokens you can get every day
              </p>
            </div>
            <div
              className={classNames(
                styles['sneakers-context__feature'],
                styles['sneakers-feature']
              )}
            >
              <div
                className={classNames(
                  styles['sneakers-feature__leading'],
                  styles['sneakers-feature__leading--durability']
                )}
              >
                <div className={classNames(styles['sneakers-feature__circle'])}>
                  <i
                    className={classNames(
                      styles['sneakers-feature__icon'],
                      'icon-durability'
                    )}
                  ></i>
                </div>
                <svg
                  className={classNames(
                    styles['sneakers-feature__stroke'],
                    styles['sneakers-feature__stroke--durability']
                  )}
                  xmlns="http://www.w3.org/2000/svg"
                  width="123"
                  height="33"
                  viewBox="0 0 123 33"
                  fill="none"
                >
                  <path
                    className="stroke-secondary"
                    d="M123 1.00024L84 1.00024L0.5 32.0002"
                    strokeWidth="2"
                    strokeDasharray="2 2"
                  />
                </svg>
              </div>
              <strong
                className={classNames(
                  styles['sneakers-feature__caption'],
                  'text-gradient'
                )}
              >
                Durability
              </strong>
              <p className={classNames(styles['sneakers-feature__text'])}>
                how many days you can train or play in these Sneakers
              </p>
            </div>
            <p className={classNames(styles['sneakers-context__text'])}>
              Other parameters are identical for all Sneakers. You need to move
              at a speed of 2–20 km/h in all Sneakers and all Sneakers have the
              same amount of Energy that is enough to train during 10 minutes or
              play one game round. You can own multiple Sneakers – they will
              switch automatically at the end of each training session.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SneakersSection
