import { useQuery } from '@tanstack/react-query'

import { ReferralService } from '@/services/referral/referralService'

import { toastError } from '@/utils/toast/toastError'

export const useReferralProfile = () => {
  const queryData = useQuery({
    queryKey: ['referral profile'],
    queryFn: () => ReferralService.getReferralProfile(),
    select: ({ data }) => data,
    onError(error: any) {
      toastError(error)
    },
  })

  return queryData
}
