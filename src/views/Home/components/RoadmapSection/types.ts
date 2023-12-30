export interface IRoadmapBlock {
  title: string
  items: IRoadmapItem[]
}

export interface IRoadmapItem {
  checked: boolean
  text: string
}
