import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import reddit from '@/assets/images/socials/reddit.png'
import twitter from '@/assets/images/socials/twitter.png'
import youtube from '@/assets/images/socials/youtube.png'
import telegram from '@/assets/images/socials/telegram.png'
import instagram from '@/assets/images/socials/instagram.png'

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
          <img
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
          <img
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
          <img
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
          <img
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
          <img
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
