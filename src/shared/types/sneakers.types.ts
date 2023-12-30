import { IUser } from '@/store/auth/authTypes'

export interface ISneakerBase {
  id: string
  title: string
  image_url: string
}

export interface ISneaker extends ISneakerBase {
  created_at: Date
  updated_at: Date
  owner_id: string
  sneaker_id: string
  earned_amount: string
  steps_amount: number
  is_dressed: boolean
}

export interface ISneakerProduct {
  id: string
  sneaker: ISneaker
  price: string
  is_closed: true
}

export interface ISneakerInventoriesParams {
  dress_status: SneakerDressStatusType
  earned_amount_ordering: SneakerEarnedOrderingType
}

export type SneakerDressStatusType = 'ALL' | 'DRESSED' | 'NOT_DRESSED'

export type SneakerEarnedOrderingType = 'LOWER' | 'HIGHER'

export function isSneakerProduct(
  item: ISneaker | ISneakerProduct
): item is ISneakerProduct {
  return 'price' in item
}

export interface ISneakerShopParams {
  price_ordering: SneakerPriceOrderingType
}

export type SneakerPriceOrderingType = 'LOWER' | 'HIGHER'

export type SneakerActionType = 'BUY' | 'SELL'

export interface IWalkingProfile {
  user: IUser
  sneakers: ISneakerBase[]
  balance: string
  energy: string
  distance: number
  energy_max: string
  distance_max: number
}

export interface ISneakerStatistic {
  distance_run: number
  calories_burned: number
  last_update: string
}