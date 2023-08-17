import { Metadata } from 'next'
import localFont from 'next/font/local'

import '../src/styles/global.scss'
import '../src/styles/vendors.scss'

import MainProvider from '@/providers/MainProvider'

const blackOblique = localFont({
  src: '../src/fonts/Avenir-BlackOblique.woff2',
  variable: '--font-black-oblique',
})
const bookOblique = localFont({
  src: '../src/fonts/Avenir-BookOblique.woff2',
  variable: '--font-book-oblique',
})

export const metadata: Metadata = {
  icons: {
    icon: ['/favicon.ico'],
    apple: ['/apple-touch-icon.png'],
    shortcut: ['/apple-touch-icon.png'],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${blackOblique.variable} ${bookOblique.variable}`}>
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  )
}
