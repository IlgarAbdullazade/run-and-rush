export interface IHTPFeature {
  title: string
  caption: string
}

export interface IHTPStep {
  title: string
  image: {
    desktop: string
    phone: string
  }
  features: IHTPFeature[]
  decorationImage?: string
}
