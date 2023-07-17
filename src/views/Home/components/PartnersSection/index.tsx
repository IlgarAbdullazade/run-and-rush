import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import topographyImg from '@/assets/images/topography.png'
import asicsImg from '@/assets/images/home/partners/asics.png'
import ghostImg from '@/assets/images/home/partners/ghost.png'
import foliusImg from '@/assets/images/home/partners/folius.png'
import sequoiaImg from '@/assets/images/home/partners/sequoia.png'
import whatfinImg from '@/assets/images/home/partners/whatfin.png'
import atleticoImg from '@/assets/images/home/partners/atletico.png'
import flexibitImg from '@/assets/images/home/partners/flexibit.png'

import styles from './style.module.scss'
import PartnersItem from './components/PartnersItem'

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
              backgroundImage: `url(${topographyImg})`,
            }}
          ></div>
        </div>
        <div className={classNames(styles['partners__wrapper'])}>
          <h1 className={classNames(styles['partners__title'])}>
            Our <strong className="text-gradient">Partners</strong>
          </h1>
          <div className={classNames(styles['partners__body'])}>
            <PartnersItem
              className={classNames(styles['partners__item'])}
              logo={sequoiaImg}
              href=""
              name="Sequiola"
            />
            <PartnersItem
              className={classNames(styles['partners__item'])}
              logo={foliusImg}
              href=""
              name="Folius"
            />
            <PartnersItem
              className={classNames(styles['partners__item'])}
              logo={flexibitImg}
              href=""
              name="Flexibit"
            />
            <PartnersItem
              className={classNames(styles['partners__item'])}
              logo={whatfinImg}
              href=""
              name="Sequiola"
            />
            <PartnersItem
              className={classNames(styles['partners__item'])}
              logo={atleticoImg}
              href=""
              name="Atletico"
            />
            <PartnersItem
              className={classNames(styles['partners__item'])}
              logo={asicsImg}
              href=""
              name="Asics"
            />
            <PartnersItem
              className={classNames(styles['partners__item'])}
              logo={ghostImg}
              href=""
              name="Ghost"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PartnersSection
