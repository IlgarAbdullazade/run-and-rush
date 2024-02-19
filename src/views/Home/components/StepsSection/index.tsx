'use client'

import classNames from 'classnames'
import Image from 'next/image'
import React from 'react'
import { HTMLAttributes } from 'react'

import Loader from '@/components/UI/Loader'

import burnerIcon from '@/assets/images/home/steps/burner.svg'
import distanceIcon from '@/assets/images/home/steps/distance.svg'
import runnerWithShoesImg from '@/assets/images/home/steps/runner-with-shoes.png'

import StepsCounter from './components/StepsCounter'
import { useSteps } from './hooks/useSteps'
import styles from './style.module.scss'

const StepsSection: React.FC<HTMLAttributes<HTMLDivElement>> = ({
  className,
}) => {
  const { isLoading, data } = useSteps()

  return (
    <section className={classNames(styles['steps'], className)}>
      <div className={classNames(styles['steps__container'])}>
        <div className={classNames(styles['steps__wrapper'])}>
          <div
            className={classNames(
              styles['steps__context'],
              styles['steps-context']
            )}
          >
            <h1 className={classNames(styles['steps-context__title'])}>
              <strong className="text-gradient">Join today</strong> and make
              your
              <strong className="text-gradient"> steps count!</strong>
            </h1>
            {isLoading ? (
              <Loader loading size={16} />
            ) : (
              <div className={classNames(styles['steps-context__body'])}>
                <StepsCounter
                  className={classNames(styles['steps-counter'])}
                  initialCount={data?.distance_run ?? 20000000}
                  min={300000}
                  max={500000}
                  icon={distanceIcon}
                  title="Distance Run (M)"
                />
                <StepsCounter
                  className={classNames(styles['steps-counter'])}
                  initialCount={data?.calories_burned ?? 24000000}
                  duration={150}
                  min={5000}
                  max={15000}
                  icon={burnerIcon}
                  title="Calories Burned (kCal)"
                />
              </div>
            )}
          </div>
          <div className={classNames(styles['steps__decoration'])}>
            <Image
              className={classNames(styles['steps__decoration-image'])}
              src={runnerWithShoesImg}
              alt="Run&Rush App"
            />
            <div
              className={classNames(
                styles['steps__decoration-circle'],
                'blur-circle-small'
              )}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StepsSection
