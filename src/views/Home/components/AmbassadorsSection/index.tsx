import { HTMLAttributes } from 'react'

import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

import mapImg from '@/assets/images/home/ambassadors/map.png'
import davisImg from '@/assets/images/home/ambassadors/davis.png'
import ivanovImg from '@/assets/images/home/ambassadors/ivanov.jpg'
import gonzalezImg from '@/assets/images/home/ambassadors/gonzalez.jpg'

import styles from './style.module.scss'
import AmbassadorsItem from './components/AmbassadorsItem'

const AmbassadorsSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: 'not all and (min-width: 1024px)',
  })

  return (
    <section className={classNames(styles['ambassadors'], className)}>
      <div className={classNames(styles['ambassadors__container'])}>
        <div className={classNames(styles['ambassadors__background'])}>
          <div
            className={classNames(
              styles['ambassadors__background-circle'],
              'blur-circle-big'
            )}
          ></div>
        </div>
        <div className={classNames(styles['ambassadors__wrapper'])}>
          <h1 className={classNames(styles['ambassadors__title'])}>
            Run&Rush <strong className="text-gradient">Ambasadors</strong>
          </h1>
          <div className={classNames(styles['ambassadors__body'])}>
            <div
              className={classNames(styles['ambassadors__map'])}
              style={{
                backgroundImage: `url(${mapImg})`,
              }}
            ></div>
            <div className={classNames(styles['ambassadors__items'])}>
              <AmbassadorsItem
                className={classNames(
                  styles['ambassadors__item'],
                  styles['ambassadors__item--first']
                )}
                image={davisImg}
                name="Anthony Davis"
                location="Denver, USA"
                stroke={
                  isTabletOrMobile ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="52"
                      height="141"
                      viewBox="0 0 52 141"
                      fill="none"
                    >
                      <path
                        d="M1 1.5L33.5 9.5L51 140.5"
                        stroke="#8784D3"
                        strokeWidth="1.5"
                        strokeDasharray="1.5 1.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="126"
                      height="149"
                      viewBox="0 0 126 149"
                      fill="none"
                    >
                      <path
                        d="M126 1H87L1.5 147.5"
                        stroke="#8784D3"
                        strokeWidth="2"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  )
                }
              />
              {!isTabletOrMobile && (
                <AmbassadorsItem
                  className={classNames(
                    styles['ambassadors__item'],
                    styles['ambassadors__item--second']
                  )}
                  image={gonzalezImg}
                  name="Raúl González"
                  location="Madrid, Spain"
                  stroke={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="2"
                      height="90"
                      viewBox="0 0 2 90"
                      fill="none"
                    >
                      <path
                        d="M1 0V90"
                        stroke="#8784D3"
                        strokeWidth="2"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  }
                />
              )}
              <AmbassadorsItem
                className={classNames(
                  styles['ambassadors__item'],
                  styles['ambassadors__item--third']
                )}
                image={ivanovImg}
                name="Konstantin Ivanov"
                location="Saint Petersburg, Russia"
                stroke={
                  isTabletOrMobile ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="156"
                      height="48"
                      viewBox="0 0 156 48"
                      fill="none"
                    >
                      <path
                        d="M1 1.5L128 46.5H156"
                        stroke="#8784D3"
                        strokeWidth="1.5"
                        strokeDasharray="1.5 1.5"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="78"
                      height="2"
                      viewBox="0 0 78 2"
                      fill="none"
                    >
                      <path
                        d="M78 1L0 1"
                        stroke="#8784D3"
                        strokeWidth="2"
                        strokeDasharray="2 2"
                      />
                    </svg>
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AmbassadorsSection
