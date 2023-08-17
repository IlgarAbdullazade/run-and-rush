import { createAsyncThunk } from '@reduxjs/toolkit'

import { AccountService } from '@/services/account/accountService'

import { toastError } from '@/utils/toast/toastError'

import { IAccount } from './accountTypes'

export const getUserAccount = createAsyncThunk<IAccount>(
  'account/getUserAccount',
  async (_, thunkAPI) => {
    try {
      const response = await AccountService.getUserAccount()
      return response.data
    } catch (error: any) {
      toastError(error)
      return thunkAPI.rejectWithValue(error.response?.data)
    }
  }
)
