import { createAsyncThunk } from '@reduxjs/toolkit'

import { AuthService } from '@/services/auth/authService'
import { UserService } from '@/services/user/userService'

import {
  IAccessToken,
  IAuthFormValues,
  IAuthResponse,
  IUser,
  IUserFormValues,
} from './authTypes'
import { errorCatch } from '@/api/helpers'

export const loginOrSignUp = createAsyncThunk<IAuthResponse, IAuthFormValues>(
  'auth/loginOrSignUp',
  async (credentials, thunkAPI) => {
    try {
      const response = await AuthService.loginOrSignUp(credentials)
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data)
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

export const verifyToken = createAsyncThunk<IAuthResponse>(
  'auth/verifyToken',
  async (_, thunkAPI) => {
    try {
      const response = await AuthService.verifyToken()
      return response.data
    } catch (error) {
      thunkAPI.dispatch(refreshToken())
    }
  }
)

export const refreshToken = createAsyncThunk<IAccessToken>(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    try {
      const response = await AuthService.refreshToken()
      return response.data
    } catch (error) {
      if (errorCatch(error) === 'jwt expired') {
        thunkAPI.dispatch(logout())
      }
      return thunkAPI.rejectWithValue(error)
    }
  }
)

export const getCurrentUser = createAsyncThunk<IUser>(
  'user/getCurrentUser',
  async (_, thunkAPI) => {
    try {
      const response = await UserService.getCurrentUser()
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data)
    }
  }
)

export const deleteCurrentUser = createAsyncThunk<{ deleted_user_id: string }>(
  'user/deleteCurrentUser',
  async (_, thunkAPI) => {
    try {
      const response = await UserService.deleteCurrentUser()
      return response.data
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data)
    }
  }
)

export const updateCurrentUser = createAsyncThunk<
  { updated_user_id: string },
  IUserFormValues
>('user/updateCurrentUser', async (values, thunkAPI) => {
  try {
    const response = await UserService.updateCurrentUser(values)
    return response.data
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response?.data)
  }
})
