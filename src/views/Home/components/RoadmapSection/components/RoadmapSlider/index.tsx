'use client'

import classNames from 'classnames'
import { HTMLAttributes, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper/types'

import RoadmapItem from '../RoadmapItem'

import styles from './style.module.scss'

register()

const RoadmapSlider: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const swiperRef = useRef<SwiperCore>()

  const params = {
    modules: [Navigation, Pagination],
    pagination: {
      el: '#roadmapSliderPagination',
      clickable: true,
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1.25,
        spaceBetween: 0,
      },
    },
  }
  return (
    <div className={classNames(styles['roadmap-slider'], className)}>
      <Swiper
        className={classNames(styles['roadmap-slider__wrapper'])}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        {...params}
      >
        {Array.from(Array(4), (_, i) => (
          <SwiperSlide
            key={i}
            className={classNames(styles['roadmap-slider__slide'])}
          >
            <RoadmapItem
              className={classNames(styles['roadmap-slider__item'])}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
        id="roadmapSliderPagination"
        className={classNames(styles['roadmap-slider__pagination'])}
      ></div>
    </div>
  )
}

export default RoadmapSlider
