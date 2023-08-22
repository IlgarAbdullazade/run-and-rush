import {
  IReferralProfile,
  IReferralReward,
} from '@/shared/types/referral.types'

import { getReferralUrl } from '@/configs/apiConfig'

import axiosInstance from '@/api/interceptors'

export const ReferralService = {
  async getReferralProfile() {
    return axiosInstance.get<IReferralProfile>(getReferralUrl('/profile'))
  },

  async getReferralRewards(offset: number) {
    return axiosInstance.get<IReferralReward[]>(getReferralUrl('/rewards'), {
      params: {
        offset,
      },
    })
  },
}
