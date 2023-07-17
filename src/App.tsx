import { Navigate, Route, Routes } from 'react-router-dom'

import HomeView from './views/Home'
import AccountView from './views/Account'
import NotFoundView from './views/NotFound'
import MainLayout from './layouts/MainLayout'
import HowToPlayView from './views/HowToPlay'
import AccountShop from './views/Account/views/AccountShop'
import AccountBalance from './views/Account/views/AccountBalance'
import AccountReferral from './views/Account/views/AccountReferral'
import AccountDashboard from './views/Account/views/AccountDashboard'
import AccountInventory from './views/Account/views/AccountInventory'

import './styles/global.scss'
import './styles/vendors.scss'

const App = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomeView />} />
      <Route path="how-to-play" element={<HowToPlayView />} />
      <Route path="account" element={<AccountView />}>
        <Route index element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<AccountDashboard />} />
        <Route path="balance" element={<AccountBalance />} />
        <Route path="inventory" element={<AccountInventory />} />
        <Route path="shop" element={<AccountShop />} />
        <Route path="referral-program" element={<AccountReferral />} />
      </Route>
      <Route path="*" element={<NotFoundView />} />
    </Route>
  </Routes>
)

export default App
