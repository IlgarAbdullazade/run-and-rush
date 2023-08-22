import { useInfiniteQuery, useQuery } from '@tanstack/react-query'

import { ReferralService } from '@/services/referral/referralService'

const QUERY_KEY = 'referral rewards'

export const useReferralRewards = () => {
  const queryData = useInfiniteQuery({
    queryKey: [QUERY_KEY],
    queryFn: ({ pageParam = 0 }) =>
      ReferralService.getReferralRewards(pageParam),
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
