import classNames from 'classnames'
import { HTMLAttributes } from 'react'

import topographyImg from '@/assets/images/topography.png'

import PartnersItem from './components/PartnersItem'
import { partners } from './data'
import styles from './style.module.scss'

const PartnersSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className={classNames(styles['partners'], className)}>
      <div className={classNames(styles['partners__container'])}>
        <div className={classNames(styles['partners__background'])}>
          <div
            className={classNames(styles['partners__background-topography'])}
            style={{
              backgroundImage: `url(${topographyImg.src})`,
            }}
          ></div>
        </div>
        <div className={classNames(styles['partners__wrapper'])}>
          <h1 className={classNames(styles['partners__title'])}>
            Our <strong className="text-gradient">Partners</strong>
          </h1>
          <div className={classNames(styles['partners__body'])}>
            {partners.map((partner) => (
              <PartnersItem
                key={partner.name}
                className={classNames(styles['partners__item'])}
                partner={partner}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
