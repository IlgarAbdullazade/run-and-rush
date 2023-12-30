import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import dotImg from '@/assets/images/home/roadmap/dot.png'

import { IRoadmapBlock } from '../../types'

import styles from './style.module.scss'

type RoadmapItemType = HTMLAttributes<HTMLDivElement> & {
  roadmap: IRoadmapBlock
}

const RoadmapItem: React.FC<RoadmapItemType> = ({ className, roadmap }) => {
  return (
    <div className={classNames(styles['roadmap-item'], className)}>
      <div className={classNames(styles['roadmap-item__icon'])}>
        <Image
          src={dotImg}
          alt="Roadmap Icon"
          height={72}
          className={classNames(styles['roadmap-item__icon-image'])}
        />
      </div>
      <div className={classNames(styles['roadmap-item__caption'])}>
        {roadmap.title}
      </div>
      {roadmap.items.map((item) => (
        <div
          key={Math.random()}
          className={classNames(
            styles['roadmap-item__todo'],
            styles['roadmap-todo']
          )}
        >
          <div
            className={classNames(
              styles['roadmap-todo__item'],
              styles['todo-item']
            )}
          >
            <div className={classNames(styles['todo-item__wrapper'])}>
              <div className={classNames(styles['todo-item__leading'])}>
                <div className={classNames(styles['todo-item__rect'])}>
                  {item.checked && (
                    <svg
                      className={classNames(styles['todo-item__icon'])}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="12"
                      viewBox="0 0 16 12"
                      fill="none"
                    >
                      <path
                        d="M5.98265 12L0 6.16297L2.28202 3.93649L5.98265 7.54704L13.718 0L16 2.22648L5.98265 12Z"
                        fill="url(#paint0_linear_767_4450)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_767_4450"
                          x1="4.69351"
                          y1="0.00329684"
                          x2="11.8285"
                          y2="14.101"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#54E3F5" />
                          <stop offset="1" stopColor="#08A3CA" />
                        </linearGradient>
                      </defs>
                    </svg>
                  )}
                </div>
              </div>
              <div className={classNames(styles['todo-item__text'])}>
                {item.text}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default RoadmapItem
