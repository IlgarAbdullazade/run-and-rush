import axios from 'axios'
import Cookies from 'js-cookie'

import { removeTokensStorage } from '@/services/auth/authHelper'
import { AuthService } from '@/services/auth/authService'

import { API_URL } from '@/configs/apiConfig'

import { errorCatch } from './helpers'

const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use((config) => {
  const accessToken = Cookies.get('accessToken')
  if (config.headers && accessToken)
    config.headers.Authorization = `Bearer ${accessToken}`

  return config
})

axiosInstance.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config
    if (
      error.response.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest._isRetry = true
      try {
        await AuthService.refreshToken()

        return axiosInstance.request(originalRequest)
      } catch (e) {
        if (errorCatch(e) === 'jwt expired') removeTokensStorage()
      }
    }

    throw error
  }
)

export default axiosInstance
