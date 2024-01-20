import {
  useInfiniteQuery,
  useMutation,
  useQueryClient,
} from '@tanstack/react-query'
import { useState } from 'react'

import {
  ISneakerProduct,
  ISneakerShopParams,
} from '@/shared/types/sneakers.types'

import { SneakersService } from '@/services/sneakers/sneakersService'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { getUserAccount } from '@/store/account/accountActions'

const QUERY_KEY = 'shop'

export const useShop = () => {
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()

  const [queryParams, setQueryParams] = useState<ISneakerShopParams>({
    price_ordering: 'LOWER',
  })

  const queryData = useInfiniteQuery({
    queryKey: [QUERY_KEY, queryParams],
    queryFn: ({ pageParam = 0 }) =>
      SneakersService.getSellingSneakers(queryParams, pageParam),
    getNextPageParam: (lastPage, allPages) => {
      const { data } = lastPage
      if (!data.length) return false
      const itemsLength = allPages.reduce((acc, page) => {
        return acc + page.data.length
      }, 0)
      return itemsLength
    },
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
      dispatch(getUserAccount())
    },
  })

  const submitBuySneaker = async (sneaker: ISneakerProduct) => {
    await buySneaker.mutateAsync(sneaker)
  }

  return { setQueryParams, ...queryData, submitBuySneaker }
}
