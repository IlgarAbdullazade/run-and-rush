import { NextRequest, NextResponse } from 'next/server'

export const config = { matcher: ['/account/:path*'] }

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone()
  url.pathname = '/'

  const token = req.cookies?.get('accessToken')

  const newResponse = NextResponse.next()

  return token ? newResponse : NextResponse.redirect(url)
}
