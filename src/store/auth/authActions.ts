import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '@/services/auth/authService'

import { IAuthFormValues, IAuthResponse } from './authTypes'

export const loginOrSignUp = createAsyncThunk<IAuthResponse, IAuthFormValues>(
  'auth/loginOrSignUp',
  async (credentials, thunkAPI) => {
    try {
      const response = await AuthService.loginOrSignUp(credentials)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const sendCode = createAsyncThunk<IAuthResponse, string>(
  'auth/sendCode',
  async (email, thunkAPI) => {
    try {
      const response = await AuthService.sendCode(email)
      return response.data
    } catch (error) {
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const logout = createAsyncThunk('auth/logout', async () => {
  AuthService.logout()
})

//export const checkAuth = createAsyncThunk<IAuthResponse>(
//  'auth/check-auth',
//  async (_, thunkAPI) => {
//    try {
//      const response = await AuthService.getNewTokens()
//      return response.data
//    } catch (error) {
//      if (errorCatch(error) === 'jwt expired') {
//        toastr.error(
//          'Logout',
//          'Your authorizaiton is finished, plz sign in again'
//        )
//        thunkAPI.dispatch(logout())
//      }
//      return thunkAPI.rejectWithValue(error)
//    }
//  }
//)
