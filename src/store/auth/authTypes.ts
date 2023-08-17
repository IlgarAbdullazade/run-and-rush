export interface IUser {
  _id: string
  avatar_url: string
  first_name: string
  last_name: string
  email: string
}

export interface IUserFormValues
  extends Pick<IUser, 'first_name' | 'last_name' | 'email'> {}

export interface IAuthFormValues {
  email: string
  code: string
  referal_code?: string
  agreeToTerms: boolean
}

export interface IAuthFormParams
  extends Omit<IAuthFormValues, 'agreeToTerms'> {}

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

export interface IAuthErrorResponse {
  detail: {
    detail: string
    code: string
  }
}
