import { HTMLAttributes, useRef } from 'react'

import classNames from 'classnames'

import { register } from 'swiper/element/bundle'
import { Swiper as SwiperCore } from 'swiper/types'
import { Navigation, Pagination, EffectFade } from 'swiper/modules'

import HTPSlide from '../HTPSlide'
import styles from './style.module.scss'
import { htpSteps } from '../../data'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import SwiperNavButtons from '@/components/UI/SwiperNavButtons'
import { useMediaQuery } from 'react-responsive'

register()

const HTPSlider: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const swiperRef = useRef<SwiperCore>()
  const isTabletOrMobile = useMediaQuery({
    query: 'not all and (min-width: 1024px)',
  })

  const params: SwiperProps = {
    modules: [Navigation, Pagination, EffectFade],
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
    pagination: {
      el: `#htoSiderPagination`,
      clickable: true,
    },
    speed: 1000,
    allowTouchMove: isTabletOrMobile,
  }
  return (
    <div className={classNames(styles['htp-slider'], className)}>
      <Swiper
        className={classNames(styles['about-slider__wrapper'])}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        {...params}
      >
        {htpSteps.map((step, index) => (
          <SwiperSlide key={index}>
            <HTPSlide
              bigTitle={index === htpSteps.length - 1}
              slideData={step}
              index={index + 1}
              className={classNames(styles['htp-slider__slide'])}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className={classNames(styles['htp-slider__actions'])}>
        <SwiperNavButtons
          className={classNames(styles['htp-slider__navigation'])}
          swiperRef={swiperRef}
        >
          <div
            id="htoSiderPagination"
            className={classNames(styles['htp-slider__pagination'])}
          ></div>
        </SwiperNavButtons>
      </div>
    </div>
  )
}

export default HTPSlider
