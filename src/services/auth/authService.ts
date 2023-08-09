import axios from 'axios'

import { API_URL, getAuthUrl } from '@/configs/apiConfig'

import { IAuthFormValues, IAuthResponse } from '@/store/auth/authTypes'

import { IAccessToken } from './../../store/auth/authTypes'
import { removeTokensStorage, saveToStorage } from './authHelper'
import { getContentType } from '@/api/helpers'

export const AuthService = {
  async loginOrSignUp(credentials: IAuthFormValues) {
    const response = await axios.post<IAuthResponse>(
      `${API_URL}${getAuthUrl('/login_or_signup')}`,
      credentials
    )

    if (response.data.access) {
      saveToStorage(response.data)
    }

    return response
  },
  async sendCode(email: string) {
    const response = await axios.post<IAuthResponse>(
      `${API_URL}${getAuthUrl('/send_code')}`,
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
    const accessToken = localStorage.get('accessToken')
    const response = await axios.post(
      `${API_URL}${getAuthUrl('/jwt/verify')}`,
      {
        token: accessToken,
      }
    )
    return response
  },
  async refreshToken() {
    const refreshToken = localStorage.get('refreshToken')
    const response = await axios.post<IAccessToken>(
      `${API_URL}${getAuthUrl('/jwt/refresh')}`,
      {
        refresh: refreshToken,
      },
      {
        headers: getContentType(),
      }
    )

    if (response.data.access) {
      localStorage.setItem('accessToken', response.data.access)
    }

    return response
  },
}
