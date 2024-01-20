export interface IRoadmapBlock {
  title: string
  showLine: boolean 
  items: IRoadmapItem[]
}

export interface IRoadmapItem {
  checked: boolean
  text: string
}
