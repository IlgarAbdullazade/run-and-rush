import { HTMLAttributes } from 'react'

import classNames from 'classnames'

import coinRect from '@/assets/images/home/gmt/coin-rect.png'

import styles from './style.module.scss'

type GmtItemProps = HTMLAttributes<HTMLDivElement> & {
  text: string
}

const GmtItem: React.FC<GmtItemProps> = ({ className, text }) => {
  return (
    <div className={classNames(styles['gmt-item'], className)}>
      <div className={classNames(styles['gmt-item__wrapper'])}>
        <div className={classNames(styles['gmt-item__rect'])}>
          <img
            src={coinRect}
            alt="GMT"
            className={classNames(styles['gmt-item__image'])}
          />
        </div>
        <div className={classNames(styles['gmt-item__blur'], 'text-gradient')}>
          ??????????????
        </div>
        <div className={classNames(styles['gmt-item__caption'])}>{text}</div>
      </div>
    </div>
  )
}

export default GmtItem
