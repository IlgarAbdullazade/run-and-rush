import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import safetyImg from '@/assets/images/home/uniqueness/safety.png'
import increaseImg from '@/assets/images/home/uniqueness/increase.png'

import styles from './style.module.scss'
import UniquenessItem from './components/UniquenessItem'

const UniquenessSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className={classNames(styles['uniqueness'], className)}>
      <div className={classNames(styles['uniqueness__container'])}>
        <div className={classNames(styles['uniqueness__background'])}>
          <div
            className={classNames(
              styles['uniqueness__background-circle'],
              'blur-circle-big'
            )}
          ></div>
        </div>
        <div className={classNames(styles['uniqueness__wrapper'])}>
          <h1
            className={classNames(styles['uniqueness__title'], 'text-gradient')}
          >
            A new global economy of wealth through health is coming.
          </h1>
          <div className={classNames(styles['uniqueness__body'])}>
            <UniquenessItem
              className={classNames(styles['uniqueness__item'])}
              title="100%"
              caption="Data privacy"
              text={"We do not sell your data.\nThe safety of your data is our top priority. It is not for sale to any third party, and never will be."}
              links={[{ href: '', title: 'Find out more' }]}
              image={safetyImg}
            />
            <UniquenessItem
              className={classNames(styles['uniqueness__item'])}
              title="+20%"
              caption="Activity increase"
              text={"British Journal of Sports Medicine.\n\nRun&Rush has achieved sustainable physical activity behaviour change using a viable business model that can continuously reward its users for being active."}
              links={[{ href: '', title: 'Find out more' }]}
              image={increaseImg}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default UniquenessSection
