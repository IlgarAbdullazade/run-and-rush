import { useQuery } from '@tanstack/react-query'

import { AccountService } from '@/services/account/accountService'

import { toastError } from '@/utils/toast/toastError'

export const useTransactions = () => {
  const queryData = useQuery({
    queryKey: ['user transactions'],
    queryFn: () => AccountService.getUserTransactions(),
    select: ({ data }) => data,
    onError(error: any) {
      toastError(error)
    },
  })

  return queryData
}
