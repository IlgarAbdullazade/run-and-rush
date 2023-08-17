import { showToast } from './showToast'
import { errorCatch } from '@/api/helpers'

export const toastError = (error: any) => {
  const message = errorCatch(error)
  showToast('error', message)
  throw message
}
