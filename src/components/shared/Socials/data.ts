import instagram from '@/assets/images/socials/instagram.png'
import telegram from '@/assets/images/socials/telegram.png'
import twitter from '@/assets/images/socials/twitter.png'
import youtube from '@/assets/images/socials/youtube.png'

import { ISocialItem } from './types'

export const socials: ISocialItem[] = [
  {
    logo: twitter,
    name: 'Twitter',
    href: 'https://twitter.com/RunRushOfficial',
  },
  {
    logo: telegram,
    name: 'Telegram',
    href: 'https://t.me/runrush',
  },
  {
    logo: instagram,
    name: 'Instagram',
    href: 'https://www.instagram.com/runrush_official/',
  },
  {
    logo: youtube,
    name: 'Youtube',
    href: 'https://www.youtube.com/channel/UC_eLWMM3M1Z-qLzfStV5gew',
  },
]
