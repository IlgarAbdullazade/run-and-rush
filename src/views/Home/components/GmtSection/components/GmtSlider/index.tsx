import { HTMLAttributes, useRef } from 'react'

import classNames from 'classnames'

import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Swiper as SwiperCore } from 'swiper/types'

import styles from './style.module.scss'
import GmtItem from '../GmtItem'

register()

const GmtSlider: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  const swiperRef = useRef<SwiperCore>()

  const params = {
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
    },
  }
  return (
    <div className={classNames(styles['gmt-slider'], className)}>
      <Swiper
        className={classNames(styles['gmt-slider__wrapper'])}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper
        }}
        {...params}
      >
        <SwiperSlide
          key="1"
          className={classNames(styles['gmt-slider__slide'])}
        >
          <GmtItem
            className={classNames(styles['gmt-slider__item'])}
            text="Released"
          />
        </SwiperSlide>
        <SwiperSlide
          key="2"
          className={classNames(styles['gmt-slider__slide'])}
        >
          <GmtItem
            className={classNames(styles['gmt-slider__item'])}
            text="Burned"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default GmtSlider
