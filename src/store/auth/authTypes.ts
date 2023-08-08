export interface IUser {
  _id: string
  first_name: string
  last_name: string
  email: string
}

export interface IAuthFormValues {
  email: string
  code: string
  referal_code?: string
  agreeToTerms: boolean
}

export interface IAccessToken {
  access: string
}

export interface IRefreshToken {
  refresh: string
}

export interface ITokens extends IAccessToken, IRefreshToken {}

export interface IAuthResponse extends ITokens {
  user: IUser
}
