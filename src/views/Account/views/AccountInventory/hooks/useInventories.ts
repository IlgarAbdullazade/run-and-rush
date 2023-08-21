import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
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
    offset: 0,
  })

  const queryData = useQuery({
    queryKey: [QUERY_KEY, queryParams],
    queryFn: () => SneakersService.getSneakerInventories(queryParams),
    select: ({ data }) => data,
  })

  const putOnMutation = useMutation({
    mutationKey: ['put on sneaker'],
    mutationFn: (sneaker: ISneaker) => SneakersService.putOnSneaker(sneaker.id),
    onMutate: async (sneaker) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY, sneaker.id] })

      // Snapshot the previous value
      const previousSneaker = queryClient.getQueryData([QUERY_KEY, sneaker.id])

      // Optimistically update to the new value
      queryClient.setQueryData([QUERY_KEY, sneaker.id], sneaker)

      // Return a context with the previous and new sneaker
      return { previousSneaker, sneaker }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [QUERY_KEY, context?.sneaker.id],
        context?.previousSneaker
      )
    },
    onSettled: (data) => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    },
  })

  const takeOffMutation = useMutation({
    mutationKey: ['take off sneaker'],
    mutationFn: (sneaker: ISneaker) =>
      SneakersService.takeOffSneaker(sneaker.id),
    onMutate: async (sneaker) => {
      await queryClient.cancelQueries({ queryKey: [QUERY_KEY, sneaker.id] })

      // Snapshot the previous value
      const previousSneaker = queryClient.getQueryData([QUERY_KEY, sneaker.id])

      // Optimistically update to the new value
      queryClient.setQueryData([QUERY_KEY, sneaker.id], sneaker)

      // Return a context with the previous and new todo
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
