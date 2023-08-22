import { useInfiniteQuery } from '@tanstack/react-query'

import { AccountService } from '@/services/account/accountService'

const QUERY_KEY = 'user transactions'

export const useTransactions = () => {
  const queryData = useInfiniteQuery({
    queryKey: [QUERY_KEY],
    queryFn: ({ pageParam = 0 }) =>
      AccountService.getUserTransactions(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const { data } = lastPage
      if (!data.length) return false
      const itemsLength = allPages.reduce((acc, page) => {
        return acc + page.data.length
      }, 0)
      return itemsLength
    },
  })

  return queryData
}
