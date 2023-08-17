'use client'

import classNames from 'classnames'
import { HTMLAttributes, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import { EffectFade, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperProps, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper/types'
import { useMediaQuery } from 'usehooks-ts'

import SwiperNavButtons from '@/components/UI/SwiperNavButtons'

import { useClientSideValue } from '@/hooks/useClientSideValue'

import { htpSteps } from '../../data'
import HTPSlide from '../HTPSlide'

import styles from './style.module.scss'

register()

const HTPSlider: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const swiperRef = useRef<SwiperCore>()
  const isTabletOrMobileValue = useMediaQuery('not all and (min-width: 1024px)')
  const isTabletOrMobile = useClientSideValue(isTabletOrMobileValue, false)

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
