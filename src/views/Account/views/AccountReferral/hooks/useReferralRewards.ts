import { useQuery } from '@tanstack/react-query'

import { ReferralService } from '@/services/referral/referralService'

import { toastError } from '@/utils/toast/toastError'

export const useReferralRewards = () => {
  const queryData = useQuery({
    queryKey: ['referral rewards'],
    queryFn: () => ReferralService.getReferralRewards(),
    select: ({ data }) => data,
    onError(error: any) {
      toastError(error)
    },
  })

  return queryData
}
