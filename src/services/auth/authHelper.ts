import { ITokens, IAuthResponse } from '@/store/auth/authTypes'

export const saveTokensStorage = (data: ITokens) => {
  localStorage.setItem('accessToken', data.access)
  localStorage.setItem('refreshToken', data.refresh)
}

export const saveToStorage = (data: IAuthResponse) => {
  saveTokensStorage(data)
  localStorage.setItem('user', JSON.stringify(data.user))
}

export const removeTokensStorage = () => {
  localStorage.removeItem('accessToken')
  localStorage.removeItem('refreshToken')
}
