import type {
  ISneaker,
  ISneakerInventroiesParams,
  SneakerDressStatusType,
  SneakerEarnedOrderingType,
} from '@/shared/types/sneakers.types'

import { getSneakersUrl } from '@/configs/apiConfig'

import axiosInstance from '@/api/interceptors'

export const SneakersService = {
  async getSneakerInventories(params: ISneakerInventroiesParams) {
    return axiosInstance.get<ISneaker[]>(getSneakersUrl('/inventories'), {
      params: {
        ...params,
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
}
