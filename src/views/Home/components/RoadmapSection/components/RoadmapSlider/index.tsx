import { HTMLAttributes, useRef } from 'react'

import classNames from 'classnames'

import { register } from 'swiper/element/bundle'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Swiper as SwiperCore } from 'swiper/types'
import { Navigation, Pagination } from 'swiper/modules'

import RoadmapItem from '../RoadmapItem'
import styles from './style.module.scss'
import { IRoadmapBlock } from '../../types'

register()

type RoadmapSliderType = HTMLAttributes<HTMLDivElement> & {
  roadmaps: IRoadmapBlock[],
}

const RoadmapSlider: React.FC<RoadmapSliderType> = ({
  className,
  roadmaps
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
        {roadmaps.map((roadmap) => (
          <SwiperSlide
            key={roadmap.title}
            className={classNames(styles['roadmap-slider__slide'])}
          >
            <RoadmapItem
              roadmap={roadmap}
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
