import { useQuery } from '@tanstack/react-query'

import { ReferralService } from '@/services/referral/referralService'

const QUERY_KEY = 'referral profile'

export const useReferralProfile = () => {
  const queryData = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => ReferralService.getReferralProfile(),
    select: ({ data }) => data,
  })

  return queryData
}
