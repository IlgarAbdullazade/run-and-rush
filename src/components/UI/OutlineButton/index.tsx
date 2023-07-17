import classNames from 'classnames'
import { Link, LinkProps } from 'react-router-dom'

import styles from './style.module.scss'

type OutlineButtonPropsType = LinkProps & {
  icon?: string
}

const OutlineButton: React.FC<OutlineButtonPropsType> = ({
  className,
  children,
  icon,
  ...rest
}) => {
  return (
    <Link className={classNames(styles['outline-button'], className)} {...rest}>
      {icon && (
        <i className={classNames(styles['outline-button__icon'], icon)}></i>
      )}
      <b className={classNames(styles['outline-button__text'])}>{children}</b>
    </Link>
  )
}

export default OutlineButton
