import { StaticImageData } from 'next/image'

export interface IHTPFeature {
  title: string
  caption: string
}

export interface IHTPStep {
  title: string
  image: {
    desktop: StaticImageData
    phone: StaticImageData
  }
  features: IHTPFeature[]
  decorationImage?: StaticImageData
}
