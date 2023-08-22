import { ITransaction } from '@/shared/types/transaction.types'

import { getAccountUrl } from '@/configs/apiConfig'

import { IAccount } from '@/store/account/accountTypes'

import axiosInstance from '@/api/interceptors'

export const AccountService = {
  async getUserAccount() {
    return axiosInstance.get<IAccount>(getAccountUrl(''))
  },

  async getUserTransactions(offset: number) {
    return axiosInstance.get<ITransaction[]>(getAccountUrl('/transactions'), {
      params: {
        offset,
      },
    })
  },
}
