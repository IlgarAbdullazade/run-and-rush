import { toast } from 'react-toastify'
import { ToastContentProps } from 'react-toastify'

import Toast from '@/components/UI/Toast'
import type { ToastType } from '@/components/UI/Toast'

export const showToast = (type: ToastType, text: string) => {
  toast((props: ToastContentProps) => (
    <Toast type={type} text={text} {...props} />
  ))
}
