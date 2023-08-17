'use client'

import classNames from 'classnames'
import { HTMLAttributes, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper/types'
import { useMediaQuery } from 'usehooks-ts'

import SwiperNavButtons from '@/components/UI/SwiperNavButtons'

import { useClientSideValue } from '@/hooks/useClientSideValue'

import AboutSlide from '../AboutSlide'

import styles from './style.module.scss'

register()

const AboutSlider: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const isDesktopOrLaptopValue = useMediaQuery('(min-width: 1024px)')
  const isDesktopOrLaptop = useClientSideValue(isDesktopOrLaptopValue, true)

  const swiperRef = useRef<SwiperCore>()

  const params = {
    modules: [Navigation, Pagination],
    pagination: {
      el: '#aboutSliderPagination',
      clickable: true,
    },
    loop: true,
    grabCursor: true,
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1536: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  }
  return isDesktopOrLaptop ? (
    <div className={classNames(styles['about-slider'], className)}>
      <div className={classNames(styles['about-slider__wrapper'])}>
        <Swiper
          onBeforeInit={(swiper) => {
            swiperRef.current = swiper
          }}
          {...params}
        >
          {Array.from(Array(10), (_, i) => (
            <SwiperSlide key={i}>
              <AboutSlide
                className={classNames(styles['about-slider__slide'])}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <SwiperNavButtons
          className={classNames(styles['about-slider__navigation'])}
          swiperRef={swiperRef}
        ></SwiperNavButtons>
      </div>
      <div
        id="aboutSliderPagination"
        className={classNames(styles['about-slider__pagination'])}
      ></div>
    </div>
  ) : (
    <></>
  )
}

export default AboutSlider
