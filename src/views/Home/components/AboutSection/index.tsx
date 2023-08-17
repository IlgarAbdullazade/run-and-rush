import classNames from 'classnames'
import { HTMLAttributes } from 'react'

import aboutBgImg from '@/assets/images/home/about/about-bg.png'

import AboutSlider from './components/AboutSlider'
import styles from './style.module.scss'

const AboutSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  return (
    <section className={classNames(styles['about'], className)}>
      <div className={classNames(styles['about__container'])}>
        <div className={classNames(styles['about__wrapper'])}>
          <div
            className={classNames(
              styles['about__context'],
              styles['about-context']
            )}
          >
            <div
              className={classNames(styles['about-context__background'])}
              style={{
                backgroundImage: `url(${aboutBgImg.src})`,
              }}
            ></div>
            <p className={classNames(styles['about-context__text'])}>
              Run&Rush is a free app that rewards your daily steps with a new
              generation currency that you can spend on cool products or donate
              to charity. <br />
              <br /> Why? Because when you take care of your health, you benefit
              society. You are more productive. You are helping to save billions
              of dollars on health care. Your movement has value: you deserve to
              participate in it.
            </p>
          </div>
          <AboutSlider className={classNames(styles['about__slider'])} />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
