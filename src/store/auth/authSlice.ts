import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { loginOrSignUp, logout } from './authActions'
import { IAuthErrorResponse, IAuthResponse, IUser } from './authTypes'

interface AuthState {
  user: IUser | null
  isAuthenticated: boolean
  isLoading: boolean
  error: IAuthErrorResponse | null
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  isLoading: false,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        loginOrSignUp.fulfilled,
        (state, action: PayloadAction<IAuthResponse>) => {
          state.isAuthenticated = true
          state.isLoading = false
          state.error = null
          state.user = action.payload.user
        }
      )
      .addCase(loginOrSignUp.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(loginOrSignUp.rejected, (state, action: any) => {
        state.isAuthenticated = false
        state.isLoading = false
        state.error = action.payload
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false
        state.isLoading = false
        state.error = null
        state.user = null
      })
  },
})

export default authSlice.reducer
