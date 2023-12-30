import { StaticImageData } from 'next/image'

export interface IMemberItem {
  image: StaticImageData
  name: string
  position?: string
}
