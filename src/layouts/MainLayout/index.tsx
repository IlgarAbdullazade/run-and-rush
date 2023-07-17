import classNames from 'classnames'
import { Outlet } from 'react-router-dom'

import mainBg from '@/assets/images/main-bg.jpg'

import styles from './style.module.scss'
import Header from '../components/Header'

const MainLayout = () => {
  return (
    <div
      className={classNames(styles['page'])}
      style={{
        backgroundImage: `url(${mainBg})`,
      }}
    >
      <Header />
      <main className={classNames(styles['page__main'])}>
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout
