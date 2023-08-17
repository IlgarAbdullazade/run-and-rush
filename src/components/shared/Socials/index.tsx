import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import instagram from '@/assets/images/socials/instagram.png'
import reddit from '@/assets/images/socials/reddit.png'
import telegram from '@/assets/images/socials/telegram.png'
import twitter from '@/assets/images/socials/twitter.png'
import youtube from '@/assets/images/socials/youtube.png'

import styles from './style.module.scss'

const Socials: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={classNames(styles['socials'], className)}>
      <div className={classNames(styles['socials__wrapper'])}>
        <a
          href=""
          target="_blank"
          className={classNames(styles['socials__link'])}
        >
          <Image
            className={classNames(styles['socials__image'])}
            src={twitter}
            alt="Twitter"
          />
        </a>
        <a
          href=""
          target="_blank"
          className={classNames(styles['socials__link'])}
        >
          <Image
            className={classNames(styles['socials__image'])}
            src={telegram}
            alt="Telegram"
          />
        </a>
        <a
          href=""
          target="_blank"
          className={classNames(styles['socials__link'])}
        >
          <Image
            className={classNames(styles['socials__image'])}
            src={instagram}
            alt="Instagram"
          />
        </a>
        <a
          href=""
          target="_blank"
          className={classNames(styles['socials__link'])}
        >
          <Image
            className={classNames(styles['socials__image'])}
            src={reddit}
            alt="Reddit"
          />
        </a>
        <a
          href=""
          target="_blank"
          className={classNames(styles['socials__link'])}
        >
          <Image
            className={classNames(styles['socials__image'])}
            src={youtube}
            alt="YouTube"
          />
        </a>
      </div>
    </div>
  )
}

export default Socials
