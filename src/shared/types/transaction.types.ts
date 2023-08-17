type OperationType = 'WITHDRAW' | 'DEPOSIT'

export interface ITransaction {
  id: string
  account_id: string
  amount: string
  operation_type: OperationType
  is_accepted: boolean
  created_at: Date
  updated_at: Date
}
