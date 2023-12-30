'use client'

import classNames from 'classnames'
import { HTMLAttributes } from 'react'
import { useMediaQuery } from 'usehooks-ts'

import { useClientSideValue } from '@/hooks/useClientSideValue'

import liJianhua from '@/assets/images/home/advisors/li_jianhua.png'
import nikolaiMazanik from '@/assets/images/home/advisors/nikolai_mazanik.png'
import pascalHartmann from '@/assets/images/home/advisors/pascal_hartmann.png'
import mapImg from '@/assets/images/home/ambassadors/map.png'

import AmbassadorsItem from './components/AmbassadorsItem'
import styles from './style.module.scss'

const AmbassadorsSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isTabletOrMobileValue = useMediaQuery('not all and (min-width: 1024px)')
  const isTabletOrMobile = useClientSideValue(isTabletOrMobileValue, false)

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
                backgroundImage: `url(${mapImg.src})`,
              }}
            ></div>
            <div className={classNames(styles['ambassadors__items'])}>
              <AmbassadorsItem
                className={classNames(
                  styles['ambassadors__item'],
                  styles['ambassadors__item--first']
                )}
                image={pascalHartmann}
                name={"Pascal\nHartmann-Seidel"}
                location="Germany"
              />
                <AmbassadorsItem
                  className={classNames(
                    styles['ambassadors__item'],
                    styles['ambassadors__item--second']
                  )}
                  image={liJianhua}
                  name="Li Jianhua"
                  location="Singapore"
                />
              <AmbassadorsItem
                className={classNames(
                  styles['ambassadors__item'],
                  styles['ambassadors__item--third']
                )}
                image={nikolaiMazanik}
                name="Nikolai Mazanik"
                location="Belarus"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AmbassadorsSection
