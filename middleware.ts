import { NextRequest, NextResponse } from 'next/server'

import { isTokenValid } from '@/utils/jwt/jwt'

import { API_URL, getAuthUrl } from '@/configs/apiConfig'

export const config = { matcher: ['/account/:path*'] }

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  url.pathname = '/'

  const { cookies } = req
  const token = cookies?.get('token')?.value
  const refreshToken = cookies?.get('refreshToken')?.value
  const newResponse = NextResponse.next()

  let tokenIsValid = isTokenValid(token)

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

  return tokenIsValid ? newResponse : NextResponse.redirect(url)
}
