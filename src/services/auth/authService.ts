import Cookies from 'js-cookie'

import { getAuthUrl } from '@/configs/apiConfig'

import { IAuthFormParams, IAuthResponse } from '@/store/auth/authTypes'

import { IAccessToken } from './../../store/auth/authTypes'
import { removeTokensStorage, saveToStorage } from './authHelper'
import { getContentType } from '@/api/helpers'
import axiosInstance from '@/api/interceptors'

export const AuthService = {
  async loginOrSignUp(credentials: IAuthFormParams) {
    const response = await axiosInstance.post<IAuthResponse>(
      `${getAuthUrl('/login_or_signup')}`,
      credentials
    )

    if (response.data.access) {
      saveToStorage(response.data)
    }

    return response
  },
  async sendCode(email: string) {
    const response = await axiosInstance.post<IAuthResponse>(
      `${getAuthUrl('/send_code')}`,
      { email }
    )

    if (response.data.access) {
      saveToStorage(response.data)
    }

    return response
  },
  logout() {
    removeTokensStorage()
    localStorage.removeItem('user')
  },
  async verifyToken() {
    const accessToken = Cookies.get('accessToken')
    const response = await axiosInstance.post(`${getAuthUrl('/jwt/verify')}`, {
      token: accessToken,
    })
    return response
  },
  async refreshToken() {
    const refreshToken = Cookies.get('refreshToken')
    const response = await axiosInstance.post<IAccessToken>(
      `${getAuthUrl('/jwt/refresh')}`,
      {
        refresh: refreshToken,
      },
      {
        headers: getContentType(),
      }
    )

    if (response.data.access) {
      Cookies.set('accessToken', response.data.access)
    }

    return response
  },
}
