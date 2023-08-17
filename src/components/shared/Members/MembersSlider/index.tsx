'use client'

import classNames from 'classnames'
import { HTMLAttributes, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper/types'

import MembersItem from '../MembersItem'

import styles from './style.module.scss'

register()

const MembersSlider: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const swiperRef = useRef<SwiperCore>()

  const params = {
    modules: [Navigation, Pagination],
    pagination: {
      el: '#membersSliderPagination',
      clickable: true,
    },
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  }
  return (
    <div className={classNames(styles['members-slider'], className)}>
      <Swiper
        className={classNames(styles['members-slider__wrapper'])}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        {...params}
      >
        {Array.from(Array(4), (_, i) => (
          <SwiperSlide
            key={i}
            className={classNames(styles['members-slider__slide'])}
          >
            <MembersItem
              className={classNames(styles['members-slider__item'])}
            />
          </SwiperSlide>
        ))}
        <div
          id="membersSliderPagination"
          className={classNames(styles['members-slider__pagination'])}
        ></div>
      </Swiper>
    </div>
  )
}

export default MembersSlider
