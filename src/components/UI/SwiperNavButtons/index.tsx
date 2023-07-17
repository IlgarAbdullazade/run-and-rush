import React, { HTMLAttributes, RefObject, useEffect, useState } from 'react'

import classNames from 'classnames'

import { Swiper } from 'swiper/types'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

import styles from './style.module.scss'

type SwiperNavButtonsPropsType = HTMLAttributes<HTMLDivElement> & {
  swiperRef: RefObject<Swiper | undefined>
}

const SwiperNavButtons: React.FC<SwiperNavButtonsPropsType> = ({
  className,
  swiperRef,
  children,
}) => {
  const [isSwiperAtBeginning, setIsSwiperAtBeginning] = useState(true)
  const [isSwiperAtEnd, setIsSwiperAtEnd] = useState(false)

  useEffect(() => {
    // Function to update the state when Swiper changes slides
    const handleSlideChange = () => {
      const swiper = swiperRef.current
      if (swiper) {
        setIsSwiperAtBeginning(swiper.isBeginning)
        setIsSwiperAtEnd(swiper.isEnd)
      }
    }

    // Subscribe to Swiper's slide change event
    const swiper = swiperRef.current
    if (swiper) {
      swiper.on('slideChange', handleSlideChange)
    }

    // Unsubscribe from the event when the component unmounts
    return () => {
      if (swiper) {
        swiper.off('slideChange', handleSlideChange)
      }
    }
  }, [swiperRef])

  return (
    <div className={classNames(styles['swiper-nav'], className)}>
      <button
        aria-label="Previous Slide"
        data-prev
        className={classNames(
          styles['swiper-nav__btn'],
          styles['swiper-nav__btn--prev']
        )}
        disabled={isSwiperAtBeginning}
        onClick={() => swiperRef.current?.slidePrev()}
      >
        <FaAngleLeft />
      </button>
      {children}
      <button
        aria-label="Next Slide"
        data-next
        className={classNames(
          styles['swiper-nav__btn'],
          styles['swiper-nav__btn--next']
        )}
        disabled={isSwiperAtEnd}
        onClick={() => swiperRef.current?.slideNext()}
      >
        <FaAngleRight />
      </button>
    </div>
  )
}

export default SwiperNavButtons
