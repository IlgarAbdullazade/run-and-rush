import { configureStore } from '@reduxjs/toolkit'

import accountReducer from './account/accountSlice'
import authReducer from './auth/authSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    account: accountReducer,
  },
  devTools: process.env.NODE_ENV !== 'production',
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
