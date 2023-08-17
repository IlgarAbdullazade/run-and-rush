import { getUsersUrl } from '@/configs/apiConfig'

import { IUser, IUserFormValues } from '@/store/auth/authTypes'

import axiosInstance from '@/api/interceptors'

export const UserService = {
  async getCurrentUser() {
    return axiosInstance.get<IUser>(getUsersUrl('/me'))
  },

  async deleteCurrentUser() {
    return axiosInstance.delete(getUsersUrl('/me'))
  },

  async updateCurrentUser(values: IUserFormValues) {
    return axiosInstance.patch(getUsersUrl('/me'), values)
  },
}
