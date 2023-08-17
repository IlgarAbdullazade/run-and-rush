import classNames from 'classnames'
import Image, { StaticImageData } from 'next/image'
import { HTMLAttributes } from 'react'

import styles from './style.module.scss'

type UniquenessItemType = HTMLAttributes<HTMLDivElement> & {
  title: string
  caption: string
  text: string
  links: Array<{ title: string; href: string }>
  image: StaticImageData
}

const UniquenessItem: React.FC<UniquenessItemType> = ({
  className,
  title,
  caption,
  text,
  links,
  image,
}) => {
  return (
    <div className={classNames(styles['uniqueness-item'], className)}>
      <div className={classNames(styles['uniqueness-item__wrapper'])}>
        <div className={classNames(styles['uniqueness-item__context'])}>
          <h2
            className={classNames(
              styles['uniqueness-item__title'],
              'text-gradient'
            )}
          >
            {title}
          </h2>
          <h3 className={classNames(styles['uniqueness-item__caption'])}>
            {caption}
          </h3>
          <p className={classNames(styles['uniqueness-item__text'])}>{text}</p>
        </div>
        <div className={classNames(styles['uniqueness-item__footer'])}>
          <div className={classNames(styles['uniqueness-item__links'])}>
            {links.map((link) => (
              <a
                key={link.title}
                target="_blank"
                href={link.href}
                className={classNames(styles['uniqueness-item__link'])}
              >
                {link.title}
              </a>
            ))}
          </div>
          <div className={classNames(styles['uniqueness-item__decoration'])}>
            <Image
              src={image}
              alt="Data privacy"
              className={classNames(
                styles['uniqueness-item__decoration-image']
              )}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default UniquenessItem
