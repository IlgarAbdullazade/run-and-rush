import { useQuery } from '@tanstack/react-query'
import { SneakersService } from '@/services/sneakers/sneakersService'

const QUERY_KEY = 'steps'

export const useSteps = () => {
  const queryData = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => SneakersService.getSneakerStatistic(),
    select: ({ data }) => data,
  })

  return { ...queryData }
}
