import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { getUserAccount } from './accountActions'
import { IAccount } from './accountTypes'

interface AccountState {
  account: IAccount | null
  isLoading: boolean
  error: any
}

const initialState: AccountState = {
  account: null,
  isLoading: false,
  error: null,
}

const accountSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getUserAccount.fulfilled,
        (state, action: PayloadAction<IAccount>) => {
          state.isLoading = false
          state.error = null
          state.account = action.payload
        }
      )
      .addCase(getUserAccount.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(getUserAccount.rejected, (state, action: any) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export default accountSlice.reducer
