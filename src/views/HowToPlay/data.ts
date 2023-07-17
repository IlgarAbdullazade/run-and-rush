import { IHTPStep } from './types'
import step1Desktop from '@/assets/images/how-to-play/step-1-desktop.png'
import step1Mobile from '@/assets/images/how-to-play/step-1-mobile.png'
import step2Desktop from '@/assets/images/how-to-play/step-2-desktop.png'
import step2Mobile from '@/assets/images/how-to-play/step-2-mobile.png'
import step3Desktop from '@/assets/images/how-to-play/step-3-desktop.png'
import step3Mobile from '@/assets/images/how-to-play/step-3-mobile.png'
import step4Desktop from '@/assets/images/how-to-play/step-4-desktop.png'
import step4Mobile from '@/assets/images/how-to-play/step-4-mobile.png'
import step5Desktop from '@/assets/images/how-to-play/step-5-desktop.png'
import step5Mobile from '@/assets/images/how-to-play/step-5-mobile.png'
import step6Desktop from '@/assets/images/how-to-play/step-6-desktop.png'
import step6Mobile from '@/assets/images/how-to-play/step-6-mobile.png'
import step7Desktop from '@/assets/images/how-to-play/step-7-desktop.png'
import step7Mobile from '@/assets/images/how-to-play/step-7-mobile.png'
import step7Decoration from '@/assets/images/how-to-play/step-7-decoration.png'

export const htpSteps: IHTPStep[] = [
  {
    title: 'Sign up',
    image: {
      desktop: step1Desktop,
      phone: step1Mobile,
    },
    features: [
      {
        title: 'Easy Sign up',
        caption: 'Just input your email',
      },
      {
        title: 'Verification Code',
        caption: 'We will sent 6-digits verification code to your email',
      },
      {
        title: 'Referral ID',
        caption: 'Just input your referral ID',
      },
    ],
  },
  {
    title: 'Main Screen',
    image: {
      desktop: step2Desktop,
      phone: step2Mobile,
    },
    features: [
      {
        title: 'App Settings',
        caption: 'Just input your email',
      },
      {
        title: 'Your shoes',
        caption: 'Just input your email',
      },
      {
        title: 'Limits and energy',
        caption: 'Just input your email',
      },
      {
        title: 'Start',
        caption: 'Just input your email',
      },
      {
        title: 'Navigation',
        caption: 'Just input your email',
      },
    ],
  },
  {
    title: 'Shop and Inventory',
    image: {
      desktop: step3Desktop,
      phone: step3Mobile,
    },
    features: [
      {
        title: 'Filters',
        caption: 'Just input your email',
      },
      {
        title: 'Select what you need',
        caption: 'Just input your email',
      },
      {
        title: 'Inventory',
        caption: 'Just input your email',
      },
    ],
  },
  {
    title: 'Topup and withdraw your balance',
    image: {
      desktop: step5Desktop,
      phone: step5Mobile,
    },
    features: [
      {
        title: 'Your Balance',
        caption: 'Just input your email',
      },
      {
        title: 'Buy and Sell',
        caption: 'Just input your email',
      },
      {
        title: 'History',
        caption: 'Just input your email',
      },
    ],
  },
  {
    title: 'Running Screen',
    image: {
      desktop: step4Desktop,
      phone: step4Mobile,
    },
    features: [
      {
        title: 'Some metrics',
        caption: 'Just input your email',
      },
      {
        title: 'Buy and Sell',
        caption: 'Just input your email',
      },
      {
        title: 'Earned Coins',
        caption: 'Just input your email',
      },
      {
        title: 'Pause/Start',
        caption: 'Just input your email',
      },
    ],
  },
  {
    title: 'Referral System',
    image: {
      desktop: step6Desktop,
      phone: step6Mobile,
    },
    features: [
      {
        title: 'Some metrics',
        caption: 'Just input your email',
      },
      {
        title: 'Your referral ID',
        caption: 'Just input your email',
      },
      {
        title: 'Just copy and share',
        caption: 'Just input your email',
      },
      {
        title: 'Reward From Referrals',
        caption: 'Just input your email',
      },
    ],
  },
  {
    title: 'Move. Earn. Repeat',
    decorationImage: step7Decoration,
    image: {
      desktop: step7Desktop,
      phone: step7Mobile,
    },
    features: [
      {
        title: 'Exchange earned coins to real money',
        caption: 'Just input your email',
      },
      {
        title: 'Something about support',
        caption: 'Just input your email',
      },
    ],
  },
]
