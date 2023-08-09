import axios from 'axios'

import { getUsersUrl } from '@/configs/apiConfig'

import { IUser, IUserFormValues } from '@/store/auth/authTypes'

export const UserService = {
  async getCurrentUser() {
    return axios.get<IUser>(getUsersUrl('/me'))
  },

  async deleteCurrentUser() {
    return axios.delete(getUsersUrl('/me'))
  },

  async updateCurrentUser(values: IUserFormValues) {
    return axios.patch(getUsersUrl('/me'), values)
  },
}
