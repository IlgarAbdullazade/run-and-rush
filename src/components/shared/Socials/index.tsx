import classNames from 'classnames'
import Image from 'next/image'
import { HTMLAttributes } from 'react'

import { socials } from './data'

import styles from './style.module.scss'

const Socials: React.FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return (
    <div className={classNames(styles['socials'], className)}>
      <div className={classNames(styles['socials__wrapper'])}>
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            className={classNames(styles['socials__link'])}
          >
            <Image
              className={classNames(styles['socials__image'])}
              src={social.logo}
              alt={social.name}
            />
          </a>
        ))}
      </div>
    </div>
  )
}

export default Socials
