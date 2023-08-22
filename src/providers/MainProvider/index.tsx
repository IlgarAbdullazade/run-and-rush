'use client'

import {
  MutationCache,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar'
import { Provider } from 'react-redux'
import { ToastContainer } from 'react-toastify'
import resolveConfig from 'tailwindcss/resolveConfig'

import { toastError } from '@/utils/toast/toastError'

import tailwindConfig from '../../../tailwind.config.js'
import MainLayout from '../../layouts/MainLayout'
import { store } from '../../store/index'

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) => toastError(error),
  }),
  mutationCache: new MutationCache({
    onError: (error) => toastError(error),
  }),
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

const MainProvider = ({ children }: { children: React.ReactNode }) => {
  const fullConfig = resolveConfig(tailwindConfig)
  const progressColor = fullConfig.theme?.colors?.customBlue as string

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          {children}
          <ProgressBar
            height="3px"
            color={progressColor}
            options={{ showSpinner: false }}
            shallowRouting
          />
        </MainLayout>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar
          theme="dark"
          closeButton={false}
        />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </Provider>
  )
}

export default MainProvider
