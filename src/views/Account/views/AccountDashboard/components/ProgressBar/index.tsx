import classNames from 'classnames'

import styles from './style.module.scss'

type ProgressBarPropsType = HTMLAttributes<HTMLDivElement> & {
  icon: string
  text: string
  progress: number
}

const ProgressBar: React.FC<ProgressBarPropsType> = ({
  className,
  icon,
  text,
  progress,
}) => {
  return (
    <div className={classNames(styles['progress-bar'], className)}>
      <div
        style={{
          width: `${progress * 100}%`,
        }}
        className={classNames(styles['progress-bar__line'])}
      ></div>
      <div className={classNames(styles['progress-bar__wrapper'])}>
        <i className={classNames(styles['progress-bar__icon'], icon)}></i>
        <div className={classNames(styles['progress-bar__text'])}>{text}</div>
      </div>
    </div>
  )
}

export default ProgressBar
