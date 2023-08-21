import { IListParams } from './common.types'

export interface ISneaker {
  id: string
  created_at: Date
  updated_at: Date
  title: string
  image_url: string
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

export interface ISneakerInventoriesParams extends IListParams {
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

export interface ISneakerShopParams extends IListParams {
  price_ordering: SneakerPriceOrderingType
}

export type SneakerPriceOrderingType = 'LOWER' | 'HIGHER'

export type SneakerActionType = 'BUY' | 'SELL'
