'use client'

import classNames from 'classnames'
import { HTMLAttributes, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper/types'
import { useMediaQuery } from 'usehooks-ts'

import SwiperNavButtons from '@/components/UI/SwiperNavButtons'

import MembersItem from '../MembersItem'
import { IMemberItem } from '../types'

import styles from './style.module.scss'

register()

type MembersSliderType = HTMLAttributes<HTMLDivElement> & {
  members: IMemberItem[]
  skewClass?: string
}

const MembersSlider: React.FC<MembersSliderType> = ({
  className,
  members,
  skewClass,
}) => {
  const swiperRef = useRef<SwiperCore>()

  const params = {
    modules: [Navigation, Pagination],
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1536: {
        slidesPerView: 4,
        spaceBetween: 10,
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
        {members.map((member) => (
          <SwiperSlide
            key={member.name}
            className={classNames(styles['members-slider__slide'])}
          >
            <MembersItem
              member={member}
              skewClass={skewClass}
              className={classNames(styles['members-slider__item'])}
            />
          </SwiperSlide>
        ))}
        <SwiperNavButtons
          className={classNames(styles['members-slider__navigation'])}
          swiperRef={swiperRef}
        ></SwiperNavButtons>
      </Swiper>
    </div>
  )
}

export default MembersSlider
