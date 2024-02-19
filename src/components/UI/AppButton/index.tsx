import classNames from 'classnames'
import Image from 'next/image'
import { AnchorHTMLAttributes } from 'react'

import appStore from '../../../assets/images/app-store.png'
import googlePlay from '../../../assets/images/google-play.png'

import styles from './style.module.scss'

type StoreType = 'android' | 'ios'

type AppButtonPropsType = AnchorHTMLAttributes<HTMLAnchorElement> & {
  store: StoreType
}

const AppButton: React.FC<AppButtonPropsType> = ({
  className,
  store,
  ...rest
}) => {
  return (
    <a
      target="_blank"
      href={
        store === 'android'
          ? 'https://play.google.com/store/apps/details?id=com.runandrush.app'
          : '#'
      }
      className={classNames(styles['app-button'], className)}
      {...rest}
    >
      <Image
        className={classNames(styles['app-button__image'])}
        src={store === 'android' ? googlePlay : appStore}
        alt={`${store} app download`}
      />
    </a>
  )
}

export default AppButton
