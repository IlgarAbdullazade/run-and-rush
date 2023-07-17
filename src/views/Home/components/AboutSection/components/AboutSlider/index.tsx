import { HTMLAttributes, useRef } from 'react'

import classNames from 'classnames'

import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Swiper as SwiperCore } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'

import AboutSlide from '../AboutSlide'
import styles from './style.module.scss'
import SwiperNavButtons from '@/components/UI/SwiperNavButtons'

register()

const AboutSlider: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
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
      1552: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
  }
  return (
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
  )
}

export default AboutSlider
