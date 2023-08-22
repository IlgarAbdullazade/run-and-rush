import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import { useState } from 'react'

import {
  ISneaker,
  ISneakerInventoriesParams,
} from '@/shared/types/sneakers.types'

import { SneakersService } from '@/services/sneakers/sneakersService'

const QUERY_KEY = 'inventories'

export const useInventories = () => {
  const queryClient = useQueryClient()

  const [queryParams, setQueryParams] = useState<ISneakerInventoriesParams>({
    dress_status: 'ALL',
    earned_amount_ordering: 'LOWER',
  })

  const queryData = useInfiniteQuery({
    queryKey: [QUERY_KEY, queryParams],
    queryFn: ({ pageParam = 0 }) =>
      SneakersService.getSneakerInventories(queryParams, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const { data } = lastPage
      if (!data.length) return false
      const inventoriesLength = allPages.reduce((acc, page) => {
        return acc + page.data.length
      }, 0)
      return inventoriesLength
    },
  })

  const putOnMutation = useMutation({
    mutationKey: ['put on sneaker'],
    mutationFn: (sneaker: ISneaker) => SneakersService.putOnSneaker(sneaker.id),
    onMutate: async (sneaker) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY, sneaker.id] })

      const previousSneaker = queryClient.getQueryData([QUERY_KEY, sneaker.id])

      queryClient.setQueryData([QUERY_KEY, sneaker.id], sneaker)

      return { previousSneaker, sneaker }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [QUERY_KEY, context?.sneaker.id],
        context?.previousSneaker
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    },
  })

  const takeOffMutation = useMutation({
    mutationKey: ['take off sneaker'],
    mutationFn: (sneaker: ISneaker) =>
      SneakersService.takeOffSneaker(sneaker.id),
    onMutate: async (sneaker) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY, sneaker.id] })

      const previousSneaker = queryClient.getQueryData([QUERY_KEY, sneaker.id])

      queryClient.setQueryData([QUERY_KEY, sneaker.id], sneaker)

      return { previousSneaker, sneaker }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [QUERY_KEY, context?.sneaker.id],
        context?.previousSneaker
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    },
  })

  const sneakerPutOnOrTakeOff = async (sneaker: ISneaker) => {
    sneaker.is_dressed
      ? await takeOffMutation.mutateAsync(sneaker)
      : await putOnMutation.mutateAsync(sneaker)
  }

  return { setQueryParams, ...queryData, sneakerPutOnOrTakeOff }
}
