import googlePlay from '../../../assets/images/google-play.png'
import appStore from '../../../assets/images/app-store.png'
import classNames from 'classnames'
import styles from './style.module.scss'
import { AnchorHTMLAttributes } from 'react'

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
      className={classNames(styles['app-button'], className)}
      {...rest}
    >
      <img
        className={classNames(styles['app-button__image'])}
        src={store === 'android' ? googlePlay : appStore}
        alt="Run and Rush"
      />
    </a>
  )
}

export default AppButton
