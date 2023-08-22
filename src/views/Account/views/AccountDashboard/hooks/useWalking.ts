import { useQuery } from '@tanstack/react-query'

import { SneakersService } from '@/services/sneakers/sneakersService'

const QUERY_KEY = 'walking profile'

export const useWalking = () => {
  const queryData = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => SneakersService.getWalkingProfile(),
    select: ({ data }) => data,
  })

  return { ...queryData }
}
