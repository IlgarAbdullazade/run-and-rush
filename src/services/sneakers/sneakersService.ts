import type {
  ISneaker,
  ISneakerInventoriesParams,
  ISneakerProduct,
  ISneakerShopParams,
  IWalkingProfile,
} from '@/shared/types/sneakers.types'

import { getSneakersUrl } from '@/configs/apiConfig'

import axiosInstance from '@/api/interceptors'

export const SneakersService = {
  async getSneakerInventories(
    params: ISneakerInventoriesParams,
    offset: number
  ) {
    return axiosInstance.get<ISneaker[]>(getSneakersUrl('/inventories'), {
      params: {
        ...params,
        offset,
      },
    })
  },

  async putOnSneaker(id: string) {
    return axiosInstance.post<ISneaker>(getSneakersUrl('/inventories/put_on'), {
      id,
    })
  },

  async takeOffSneaker(id: string) {
    return axiosInstance.post<ISneaker>(
      getSneakersUrl('/inventories/take_off'),
      {
        id,
      }
    )
  },

  async getSellingSneakers(params: ISneakerShopParams, offset: number) {
    return axiosInstance.get<ISneakerProduct[]>(
      getSneakersUrl('/selling_orders'),
      {
        params: {
          ...params,
          offset,
        },
      }
    )
  },

  async getSellingSneaker(id: string) {
    return axiosInstance.get<ISneakerProduct[]>(
      getSneakersUrl(`/selling_orders/${id}`),
      {
        params: {
          id,
        },
      }
    )
  },

  async buySneaker(id: string) {
    return axiosInstance.post<ISneaker>(getSneakersUrl('/buy_sneaker'), {
      id,
    })
  },

  async getWalkingProfile() {
    return axiosInstance.get<IWalkingProfile>(getSneakersUrl('/walking'))
  },
}
