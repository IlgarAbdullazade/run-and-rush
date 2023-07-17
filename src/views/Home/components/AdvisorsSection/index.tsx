import { HTMLAttributes } from 'react'

import classNames from 'classnames'
import { useMediaQuery } from 'react-responsive'

import gridBgImg from '@/assets/images/grid-bg.png'
import merTickerImg from '@/assets/images/mer-ticker.png'
import { MembersGrid } from '@/components/shared/Members'
import MembersSlider from '@/components/shared/Members/MembersSlider'

import styles from './style.module.scss'

const AdvisorsSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isTabletOrMobile = useMediaQuery({
    query: 'not all and (min-width: 768px)',
  })

  return (
    <section className={classNames(styles['advisors'], className)}>
      <div className={classNames(styles['advisors__container'])}>
        <div className={classNames(styles['advisors__background'])}>
          <div
            className={classNames(styles['advisors__background-grid'])}
            style={{
              backgroundImage: `url(${gridBgImg})`,
            }}
          ></div>
          <div
            className={classNames(
              styles['advisors__background-circle'],
              'blur-circle-small'
            )}
          ></div>
        </div>
        <div className={classNames(styles['advisors__wrapper'])}>
          <h1 className={classNames(styles['advisors__title'])}>
            The <strong className="text-gradient">Advisors</strong>
          </h1>
          {isTabletOrMobile ? (
            <MembersSlider className={classNames(styles['advisors__slider'])} />
          ) : (
            <MembersGrid className={classNames(styles['advisors__members'])} />
          )}
        </div>
      </div>
      <div className={classNames(styles['advisors__ticker'])}>
        <div
          className={classNames(styles['advisors__ticker-image'])}
          style={{
            backgroundImage: `url(${merTickerImg})`,
          }}
        ></div>
      </div>
    </section>
  )
}

export default AdvisorsSection
