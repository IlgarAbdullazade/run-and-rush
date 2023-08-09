import axios from 'axios'

import { API_URL, getAuthUrl } from '@/configs/apiConfig'

import { IAuthFormValues, IAuthResponse } from '@/store/auth/authTypes'

import { removeTokensStorage, saveToStorage } from './authHelper'

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
}
