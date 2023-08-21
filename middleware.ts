import { NextRequest, NextResponse } from 'next/server'

import { isTokenValid } from '@/utils/jwt/jwt'

import { API_URL, getAuthUrl } from '@/configs/apiConfig'

export async function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  url.pathname = '/'
  const { cookies } = request

  const protectedRoutes = request.nextUrl.pathname.startsWith('/account')
  const accessToken = cookies?.get('accessToken')?.value
  const refreshToken = cookies?.get('refreshToken')?.value
  const newResponse = NextResponse.next()

  let tokenIsValid = isTokenValid(accessToken)

  if (!tokenIsValid && !!refreshToken) {
    const response = await fetch(`${API_URL}${getAuthUrl('/jwt/refresh')}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refresh: refreshToken,
      }),
    })
    const { access } = await response.json()

    newResponse.cookies.set('accessToken', access)
    tokenIsValid = true
  }

  if (protectedRoutes) {
    return tokenIsValid ? newResponse : NextResponse.redirect(url)
  }

  return newResponse
}
