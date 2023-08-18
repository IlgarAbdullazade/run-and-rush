import Cookies from 'js-cookie'

import { IAuthResponse, ITokens } from '@/store/auth/authTypes'

export const saveTokensStorage = (data: ITokens) => {
  Cookies.set('accessToken', data.access)
  Cookies.set('refreshToken', data.refresh, { expires: 30 })
}

export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data)
  localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
  Cookies.remove('accessToken')
  Cookies.remove('refreshToken')
}
