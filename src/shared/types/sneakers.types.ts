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

export interface ISneakerInventroiesParams {
  dress_status: SneakerDressStatusType
  earned_amount_ordering: SneakerEarnedOrderingType
  offset: number
}

export type SneakerDressStatusType = 'ALL' | 'DRESSED' | 'NOT_DRESSED'

export type SneakerEarnedOrderingType = 'LOWER' | 'HIGHER'

export function isSneakerProduct(
  item: ISneaker | ISneakerProduct
): item is ISneakerProduct {
  return 'price' in item
}
