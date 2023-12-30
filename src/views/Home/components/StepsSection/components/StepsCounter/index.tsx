'use client'

import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'
import React from 'react'
import { useCountUp } from 'react-countup'

import styles from './style.module.scss'

type StepsCounterType = HTMLAttributes<HTMLDivElement> & {
  min: number
  max: number
  duration?: number
  initialCount: number
  title: string
  icon: string
}

const StepsCounter: React.FC<StepsCounterType> = ({
  className,
  min,
  max,
  duration = 1000,
  initialCount,
  title,
  icon,
}) => {
  const countUpRef = React.useRef(null)
  let randomCount = getRandom()

  const { start } = useCountUp({
    ref: countUpRef,
    start: initialCount,
    end: initialCount + randomCount,
    delay: 0,
    duration: duration * 1000,
    separator: ',',
    decimals: 2,
    decimal: '.',
    useEasing: false,
    onEnd: () => restartRandom(),
  })

  const restartRandom = () => {
    randomCount = getRandom()
    start()
  }

  function getRandom() {    
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  return (
    <div className={classNames(styles['steps-counter'], className)}>
      <Image
        src={icon}
        alt="Distance Icon"
        className={classNames(styles['steps-counter__icon'])}
      ></Image>
      <div className={classNames(styles['steps-counter__info'])}>
        <h3
          ref={countUpRef}
          className={classNames(
            styles['steps-counter__title'],
            'text-gradient'
          )}
        ></h3>
        <div className={classNames(styles['steps-counter__caption'])}>
          {title}
        </div>
      </div>
    </div>
  )
}

export default StepsCounter
