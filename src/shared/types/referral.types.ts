export interface IReferralProfile {
  user_id: string
  greeting: string
  code: string
  referrer_id: string
  balance: string
  balance_currency: string
  referrals_count: number
  commission: string
}

export interface IReferralReward {
  id: string
  user_from_id: string
  user_from_email: string
  created_at: Date
  amount: string
  amount_currency: string
}
