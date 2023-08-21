import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useState } from 'react'

import {
  ISneakerProduct,
  ISneakerShopParams,
} from '@/shared/types/sneakers.types'

import { SneakersService } from '@/services/sneakers/sneakersService'

const QUERY_KEY = 'shop'

export const useShop = () => {
  const queryClient = useQueryClient()

  const [queryParams, setQueryParams] = useState<ISneakerShopParams>({
    price_ordering: 'LOWER',
    offset: 0,
  })

  const queryData = useQuery({
    queryKey: [QUERY_KEY, queryParams],
    queryFn: () => SneakersService.getSellingSneakers(queryParams),
    select: ({ data }) => data,
  })

  const buySneaker = useMutation({
    mutationKey: ['buy sneaker'],
    mutationFn: (sneakerProduct: ISneakerProduct) =>
      SneakersService.buySneaker(sneakerProduct.id),
    onMutate: async (sneakerProduct) => {
      await queryClient.cancelQueries({
        queryKey: [QUERY_KEY, sneakerProduct.id],
      })

      // Snapshot the previous value
      const previousSneaker = queryClient.getQueryData([
        QUERY_KEY,
        sneakerProduct.id,
      ])

      // Optimistically update to the new value
      queryClient.setQueryData([QUERY_KEY, sneakerProduct.id], sneakerProduct)

      // Return a context with the previous and new sneaker
      return { previousSneaker, sneakerProduct }
    },
    onError: (_, __, context) => {
      queryClient.setQueryData(
        [QUERY_KEY, context?.sneakerProduct.id],
        context?.previousSneaker
      )
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEY] })
    },
  })

  const submitBuySneaker = async (sneaker: ISneakerProduct) => {
    await buySneaker.mutateAsync(sneaker)
  }

  return { setQueryParams, ...queryData, submitBuySneaker }
}
