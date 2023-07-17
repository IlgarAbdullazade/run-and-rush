import { HTMLAttributes } from 'react'

import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

import gridBgImg from '@/assets/images/grid-bg.png'
import comingSoon from '@/assets/images/home/gmt/coming-soon.png'
import floatingCoins from '@/assets/images/home/gmt/flaoting-coins.png'

import styles from './style.module.scss'
import GmtItem from './components/GmtItem'
import GmtSlider from './components/GmtSlider'

const GmtSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: 'not all and (min-width: 768px)',
  })

  return (
    <section className={classNames(styles['gmt'], className)}>
      <div className={classNames(styles['gmt__tapes'], styles['gmt-tapes'])}>
        <div
          style={{
            backgroundImage: `url(${comingSoon})`,
          }}
          className={classNames(
            styles['gmt-tapes__item'],
            styles['gmt-tapes__item--above']
          )}
        ></div>
        <div
          style={{
            backgroundImage: `url(${comingSoon})`,
          }}
          className={classNames(
            styles['gmt-tapes__item'],
            styles['gmt-tapes__item--under']
          )}
        ></div>
      </div>

      <div className={classNames(styles['gmt__container'])}>
        <div className={classNames(styles['gmt__background'])}>
          <div
            className={classNames(styles['gmt__background-grid'])}
            style={{
              backgroundImage: `url(${gridBgImg})`,
            }}
          ></div>
          <div
            className={classNames(
              styles['gmt__background-circle'],
              'blur-circle-middle'
            )}
          ></div>
        </div>
        <div
          className={classNames(styles['gmt__floating-coins'])}
          style={{
            backgroundImage: `url(${floatingCoins})`,
          }}
        ></div>

        <div className={classNames(styles['gmt__wrapper'])}>
          <div
            className={classNames(
              styles['gmt__context'],
              styles['gmt-context']
            )}
          >
            <h1 className={classNames(styles['gmt-context__title'])}>
              GMT <strong className="text-gradient">Status</strong>
            </h1>
            <div className={classNames(styles['gmt-context__caption'])}>
              TBA
            </div>
            {isTabletOrMobile ? (
              <GmtSlider
                className={classNames(styles['gmt-context__slider'])}
              />
            ) : (
              <div className={classNames(styles['gmt-context__body'])}>
                <GmtItem
                  className={classNames(styles['gmt-context__item'])}
                  text="Released"
                />
                <GmtItem
                  className={classNames(styles['gmt-context__item'])}
                  text="Burned"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default GmtSection
