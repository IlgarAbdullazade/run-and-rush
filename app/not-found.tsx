'use client'

import type { Metadata } from 'next/types'

import { titleMerge } from '@/configs/seoConfig'

import NotFoundView from '@/views/NotFound'

export const metadata: Metadata = {
  title: titleMerge('Page not found'),
}

export default function NotFound() {
  return <NotFoundView />
}
