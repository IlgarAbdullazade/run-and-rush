import { ReactNode } from 'react'
import { TabsProps } from 'react-tabs'

export type TabType<T extends string = string> = {
  value: T
  label: string
  disabled?: boolean
}

export type AccountTabsPropsType = TabsProps & {
  select: ReactNode
  tabs: TabType[]
  children: ReactNode[]
}
